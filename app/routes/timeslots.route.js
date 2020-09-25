const express = require('express');
const router = express.Router();
const timeslots = require("../controllers/timeslots.controller");

   // Create new timeslot
   router.post("/add", timeslots.add );
       
   //Get all timeslot list
   router.get('/get' , timeslots.get );

   //Get single 
   router.get('/get/:id' , timeslots.getSingle );

   //Update selected timeslot
   router.post('/update' , timeslots.update );

   //Delete selected timeslot
   router.delete('/delete' , timeslots.delete );


//export router
module.exports = router
