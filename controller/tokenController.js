import jsonwebtoken from 'jsonwebtoken'

export const tokenRefresh = async(req,res)=>{

    const refresh = req.body.token
    
    if(!refresh){
        return res.status(401).json({message:'Refresh token is required'})
    }
  jsonwebtoken.verify(refresh,process.env.refreshtokensecret,(err,decoded)=>{
    if(err){
        return res.status(403).json({message:'Invailed refresh token'})
    }
    const userDetails ={
        userId: decoded.userId
    }
     const accessToken = jsonwebtoken.sign(userDetails,process.env.tokensecret,{ 
        expiresIn:process.env.tokenlife
    })
     res.json({
        accessToken
     })
  })
}