const express=require("express");
const route=express.Router();
const service=require('../services/slot_service');
const controller=require('../controllers/slot_controller');


route.get("/slots",service.slot_home)

route.get("/add_slot",service.add_slot)

route.get("/update_slot",service.update_slot)

route.get("/delete_slot",service.delete_slot)

//API
route.get('/api/slots',controller.find_slot);
route.post('/api/slots',controller.add_slot);
route.put('/api/slots/:id',controller.update_slot);
route.delete('/api/slots/:id',controller.delete_slot);


module.exports=route;