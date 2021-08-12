var Slotdb=require('../models/slot_model');


// create and save new user
exports.add_slot = (req,res)=>{
    // validate request
    if(!req.body){
        res.status(400).send({ message : "Content can not be emtpy!"});
        return;
    }

    // new slot
    const slot = new Slotdb({
        date:req.body.date,
        start_time:req.body.start_time,
        end_time:req.body.end_time
    })

    // save slot in the database
    slot
        .save(slot)
        .then(data => {
            res.redirect('/slots');
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

exports.update_slot=(req,res)=>
{
    if(!req.body)
    {
        return res.status(400).send({message:"Update data can not be empty"});
    }
    else{

        const id=req.params.id;
        Slotdb.findByIdAndUpdate(id,rq.body,{useFindAndModify:false})
        .then(results=>
            {
                if(!results){
                    res.status(404).send({ message : `Cannot Update slot with ${id}. Maybe slot not found!`});
                }
                else
                {
                    res.send(results);
                }
            })
        .catch(err=>
            {
                res.status(500).send({ message : "Error Update slot information"})
            });

    }
}

exports.delete_slot=(req,res)=>
{
    const id=req.query.id;

    Slotdb.query.findByIdAndDelete(id)
    .then(results=> {
            if(!results) {
                res.status(400).send({message:`Cannot delete with id ${id}. please cheack if id is correct`});
            }
            else{
                res.send({message:"slot was sucessfully deleted."
            });
        }
    })
    .catch(err=>{
            res.status(500).send({message:"Could not delete slot with id=" + id
        });
    });
}
