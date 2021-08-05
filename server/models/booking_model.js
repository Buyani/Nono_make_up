const mongoose=require("mongoose");

const BookingSchema=new mongoose.Schema({
    user_id:
    {
        type:String,
        required:true,
        type: Schema.Types.ObjectId, ref: 'userdb'
    },
    slot_id:{
        type:String,
        required:true,
        type: Schema.Types.ObjectId, ref: 'slotdb'
    },
    comments:{
        type:String
    },
    confirmed:{
        type:Boolean,
        required:true
    },
    timestamps:true
})

const Bookingdb=mongoose.model("bookingdb",BookingSchema);

module.exports=Bookingdb;