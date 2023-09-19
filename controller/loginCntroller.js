import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

import User from '../model/user.js'

export const login =  async(req, res) => {
    try {
        const email = req.body.email
        const password = req.body.password

        const user = await User.findOne({email:email})

        if(user){
            const userDetails ={
                email: email
            }
            const data = await bcrypt.compare(password,user.password)
            if(data){
                const token = jsonwebtoken.sign(userDetails,process.env.tokensecret,{
                    expiresIn: process.env.tokenlife,
                })
                const refreshtoken = jsonwebtoken.sign(userDetails,process.env.refreshtokensecret,{
                    expiresIn: process.env.refreshtokenlife,
                })
                const tokens ={
                    access: token,
                    refresh: refreshtoken
                }
                res.json({
                    success: true,
                    tokens
                })
            }else{
                res.json({
                    success:false,
                    message:'incorrect password'
                })
            }
        }else{
            res.json({
                success: false,
                message: 'Invailed Email'
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: 'something went wrong'
        })
    }
  }