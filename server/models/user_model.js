const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    cellphone:{
        type:String
    },
    bookings: [{ type: Schema.Types.ObjectId, ref: 'bookingdb' }],
    timestamps:true
})

const Userdb=mongoose.model("userdb",UserSchema);

module.exports=Userdb;