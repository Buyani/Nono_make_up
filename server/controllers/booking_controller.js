var Bookingdb=require('../models/booking_model');


// create and save new user
exports.add_booking = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new slot
    const booking = new Bookingdb({
        slot_id:req.body.slot_id,
        name:req.body.name,
        email:req.body.email,
        cellphone:req.body.cellphone,
        confirmed:req.body.confirmed,
        comments:req.body.comments
    })

    // save slot in the database
    slot
        .save(booking)
        .then(data => {
            res.redirect('/bookings');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

exports.find_booking=(req,res)=>{

    if(req.query.id)
    {
        const id=req.query.id

        Bookingdb.findById(id)
        .then(results=>{
                if(!results){
                    res.send({message:"No results were found matching id"+id});
                    return;
                }
                else{res.send(results);}
            })
        .catch(error=>{res.status(500).send({ message: "Erro retrieving booking with id " + id})})
    }
    else
    {
        Bookingdb.find()
        .then(results=>{res.send(results);})
        .catch(err=>{ res.status(500).send( {message:err.message || "Error Occurred while retriving booking information"}); });
    }

}

exports.update_booking=(req,res)=>
{
    if(!req.body)
    {
        return res.status(400).send({message:"Update data can not be empty"});
    }
    else{

        const id=req.params.id;
        Bookingdb.findByIdAndUpdate(id,rq.body,{useFindAndModify:false})
        .then(results=>
            {
                if(!results){
                    res.status(404).send({ message : `Cannot Update booking with ${id}. Maybe booking not found!`});
                }
                else
                {
                    res.send(results);
                }
            })
        .catch(err=>
            {
                res.status(500).send({ message : "Error Update booking information"})
            });

    }
}

exports.delete_booking=(req,res)=>
{
    const id=req.query.id;

    Bookingdb.query.findByIdAndDelete(id)
    .then(results=> {
            if(!results) {
                res.status(400).send({message:`Cannot delete with id ${id}. please cheack if id is correct`});
            }
            else{
                res.send({message:"booking was sucessfully deleted."
            });
        }
    })
    .catch(err=>{
            res.status(500).send({message:"Could not delete booking with id=" + id
        });
    });
}
