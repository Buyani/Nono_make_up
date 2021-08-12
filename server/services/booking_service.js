const axios=require("axios");

exports.booking_home=(req,res)=>{
    axios.get('http://localhost:3000/api/bookings')
    .then(function(response){
        res.render('bookings', { bookings : response.data });
    })
    .catch(err =>{
        res.send(err);
    })
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