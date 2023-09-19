import jsonwebtoken from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import User from '../model/user.js'

export const register = async(req,res)=>{
 try{
    console.log('started.......');
    const email = req.body.email
    const user = await User.findOne({email:email})
    if(user){
        res.json({
            success:false,
            message:'E-mail Already Exist'
        })
    }else{
        const password = req.body.password
        const hassedPassword = await bcrypt.hash(password,10)

        const newUser = new User({
            firstname: req.body.fname,
            lastname: req.body.lname,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender,
            password: hassedPassword
        })
        await newUser.save()
        let userdetails = {
            email: req.body.email
        }
        const token = jsonwebtoken.sign(userdetails, process.env.tokensecret,{
            expiresIn: process.env.tokenlife,
        })
        const refreshtoken = jsonwebtoken.sign(userdetails,process.env.refreshtokensecret,{
            expiresIn: process.env.refreshtokenlife,
        })
        const tokens ={
            access: token,
            refresh: refreshtoken
        }
        res.json({
            success:true,
            tokens
        })
    }
 }catch(err){
    res.json({
        message: 'something went wrong'
    })
 }
}