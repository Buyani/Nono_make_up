const axios=require("axios");

exports.slot_home=(req,res)=>{
    axios.get('http://localhost:3000/api/slots')
    .then(function(response){
        res.render('slots', { slots : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
}

exports.add_slot = (req, res) =>{
    res.render('add_slot');
}

exports.update_slot = (req, res) =>{
    res.status(200).send({data:"slot update from service"});
}

exports.delete_slot = (req, res) =>{
    res.status(200).send({data:"slot delete from service"});
}