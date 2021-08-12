const mongoose=require("mongoose");
const { Schema } = mongoose;

const BookingSchema=new Schema({
    _id:{
        type: Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    cellphone:{
        type:String,
        required:true
    },
    name:
    {
        type:String,
        required:true
    },
    email:{
        required:true,
        type:String
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

})

const Bookingdb=mongoose.model("bookingdb",BookingSchema);

module.exports=Bookingdb;