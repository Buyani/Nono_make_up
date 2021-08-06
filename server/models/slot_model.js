const mongoose =require("mongoose");

const SlotSchema=new mongoose.Schema({
    _id:Schema.Types.ObjectId,
    date:
    {
        type:new Date,
        required:true
    },
    start_time:
    {
        type:new Date,
        require:true
    },
    end_time:
    {
        type:new Date().setTime,
        require:true
    },

    timestamps:true


})

const Slotdb=mongoose.model("slotdb",SlotSchema);

module.exports=Slotdb;