var Slotdb=require('../models/slot_model')

exports.craete_slot=(req,res)=>{
    if(!req.body)
    {
        res.status(400).send({message:"Contenet can not be empty!!"});
        return;
    }
}