const mongoose =require("mongoose");

const SlotSchema=new mongoose.Schema({
    _id:Schema.Types.ObjectId,
    Date:
    {
        type:new Date,
        required:true
    },
    Start_Time:
    {
        type:new Date,
        require:true
    },
    End_Time:
    {
        type:new Date().setTime,
        require:true
    },
    {
        timestamps:true
    }

})

const Slotdb=mongoose.model("slotdb",SlotSchema);

module.exports=Slotdb;