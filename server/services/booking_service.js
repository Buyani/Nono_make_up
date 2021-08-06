const axios=require("axios");

exports.booking_home=(req,res)=>{
    res.status(200).send({data:"booking home from service"});
}

exports.create_booking = (req, res) =>{
    res.status(200).send({data:"booking create from service"});
}

exports.update_booking = (req, res) =>{
    res.status(200).send({data:"booking update from service"});
}

exports.delete_booking = (req, res) =>{
    res.status(200).send({data:"booking delete from service"});
}