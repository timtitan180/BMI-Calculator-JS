

const express = require('express');

const process = require('process');

const app = express();



app.get('/',(req,res) =>{
  res.sendFile(__dirname + "/bmi.html");
 });

 app.get('/bmi.css',(req,res)=> {
   res.sendFile(__dirname + "/bmi.css");
 });
app.listen(5005,() => {
     console.log("Server is running");
 }).listen(process.env.PORT)
