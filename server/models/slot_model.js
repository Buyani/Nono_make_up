const mongoose =require("mongoose");
const { Schema } = mongoose;

const SlotSchema=new Schema({
    _id:{
        type: Schema.Types.ObjectId,
        index: true,
        required: true,
        auto: true,
    },
    date:
    {
        type: Date,
        default: Date.now,
        required:true
    },
    start_time:
    {
        type: Date,
        default: Date.now,
        require:true
    },
    end_time:
    {
        type: Date,
        default: Date.now,
        require:true
    },

})

const Slotdb=mongoose.model("slotdb",SlotSchema);

module.exports=Slotdb;