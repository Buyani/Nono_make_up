const express=require("express");
const route=express.Router();

const service=require('../services/booking_service');
const controller=require('../controllers/booking_controller')

route.get("/",service.booking_home)

route.get("/create_booking",service.create_booking)

route.get("/update_booking",service.update_booking)

route.get("/delete_booking",service.delete_booking)


//API
route.get('/api/bookings',controller.find_booking);
route.post('/api/bookings',controller.create_booking);
route.put('/api/bookings/:id',controller.update_booking);
route.delete('/api/bookings/:id',controller.delete_booking);

module.exports=route;