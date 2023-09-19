import jsonwebtoken from 'jsonwebtoken'

export const tokenCheck = (req,res,next)=>{
    const token = req.body.token || req.query.toke || req.headers['authorization']
    if(token){
        jsonwebtoken.verify(token,process.env.tokensecret,function(err,decoded){
            if(err){
                return req.status(401).json({success: false,message: 'unautherised access'})
            }
            res.locals.jwt_user = decoded
            next()
        })
    }else{
        return res.status(401).json({
            success: false,
            message:'No token provided'
        })
    }
}