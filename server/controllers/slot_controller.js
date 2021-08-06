var Slotdb=require('../models/slot_model');


// create and save new user
exports.create_slot = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new user
    const slot = new Slotdb({
        date:req.body.date,
        start_time:req.body.start_time,
        end_time:req.body.end_time
    })

    // save user in the database
    slot
        .save(slot)
        .then(data => {
            //res.send(data)
            res.redirect('/');
        })
        .catch(err =>{
            res.status(500).send({
                message : err.message || "Some error occurred while creating a create operation"
            });
        });

}

exports.find_slot=(req,res)=>{

    if(req.query.id)
    {
        const id=req.query.id

        Slotdb.findById(id)
        .then(results=>{
                if(!results){
                    res.send({message:"No results were found matching id"+id});
                    return;
                }
                else{res.send(results);}
            })
        .catch(error=>{res.status(500).send({ message: "Erro retrieving slot with id " + id})})
    }
    else
    {
        Slotdb.find()
        .then(results=>{res.send(results);})
        .catch(err=>{ res.status(500).send( {message:err.message || "Error Occurred while retriving user information"}); });
    }

}
