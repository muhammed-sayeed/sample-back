import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:Number
    },
    gender:{
        type:String
    },
    password:{
        type:String
    }
},{timestams:true})

const User = mongoose.model('User',userSchema)
export default User