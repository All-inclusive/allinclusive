const mongoose = require('mongoose');
const sellerSchema = new mongoose.Schema(
    {
        name  : {type:String , required:true},
        email : {type:String , required:true},
        password : {type:String , required:true},
        phoneNumber : {type:String , required:true},
        imgUrl :{type:String , required:true},
       // events
    },
    {
        timestamps : true,
    }
);
module.exports = mongoose.model("Seller",sellerSchema)