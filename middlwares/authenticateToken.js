import jsonwebtoken from 'jsonwebtoken'

export const tokenCheck = (req,res,next)=>{
    try {
        const token = req.body.token || req.query.token || req.headers['authorization']
        if(token){
            console.log('tokenVarify',token);
            jsonwebtoken.verify(token,process.env.tokensecret,function(err,decoded){
                if(err){
                    console.log('in varfy',err);
                    return res.status(401).json({"error":true,"message":'unauthorized access'})
         }
         res.locals.jwt_user = decoded;
         next()
            })
        }else{
            return res.status(401).send({
                "error":true,
                "msg":'No token Provided'
            })
        }
    } catch (error) {
        console.log('error',error);
    }
   
}