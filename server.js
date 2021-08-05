
const express=require("express");
const dotenv=require('dotenv').config({ path: 'config.env' });
const morgan = require("morgan");
const bodyperser=require("body-parser");
//const path=require("path");
const dbconnect=require("./server/database/connection");

const app=express();
const PORT= process.env.PORT ||8080

//log request
app.use(morgan('tiny'));

//mongodb connection
dbconnect();


//pass request to body perser
app.use(bodyperser.urlencoded({extended:true}));

//set view engine

//load assets

//load router



app.listen(PORT,()=>{console.log('Server running on:http://localhost:{PORT}')})