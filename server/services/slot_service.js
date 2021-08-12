const axios=require("axios");

exports.slot_home=(req,res)=>{
    res.status(200).send({data:"slot home from service"});
}

exports.create_slot = (req, res) =>{
    res.status(200).send({data:"slot create from service"});
}

exports.update_slot = (req, res) =>{
    res.status(200).send({data:"slot update from service"});
}

exports.delete_slot = (req, res) =>{
    res.status(200).send({data:"slot delete from service"});
}