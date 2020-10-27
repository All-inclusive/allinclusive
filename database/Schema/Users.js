const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        userName  : {type:String , required:true},
        email : {type:String , required:true},
        password : {type:String , required:true},
        phoneNumber : {type:String , required:true},
        specialNeed :{type: Boolean, required:true},
        imgUrl :{type:String , required:true},
        //events  to do later
    },
    {
        timestamps : true,
    }
);
module.exports = mongoose.model("User",userSchema)