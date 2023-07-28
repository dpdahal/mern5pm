import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
        enum:['male','female']
    },
    role:{
        type: String,
        enum:['user','admin'],
        default: 'user',
    },
    image:{
        type: String,
        default:null
    }
},{
    versionKey: false,
});

userSchema.pre('save',function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = bcrypt.hashSync(this.password,10);
    next();
});

userSchema.methods.toJSON = function(){
    let obj = this.toObject();
    if(obj.image){
        obj.image = `${process.env.BASE_URL}/users/${obj.image}`;

    }
    delete obj.password;
    return obj;
}

userSchema.methods.checkPassword = function(password){
    return bcrypt.compareSync(password,this.password);
}

userSchema.methods.generateToken = function(){
    return jwt.sign(
        {id:this._id},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_EXPIRE});
}
export default mongoose.model('User',userSchema);
