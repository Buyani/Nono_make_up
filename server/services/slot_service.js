const axios=require("axios");
baseUrl = process.env.baseURL || "http://localhost";
const PORT= process.env.PORT || 3000;

exports.slot_home=(req,res)=>{
    axios.get(baseUrl+':'+PORT+'/api/bookings')
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