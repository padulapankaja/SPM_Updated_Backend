const express = require('express');
const router = express.Router();
const generate = require("../controllers/generate.controller");
 
   //Get all timeslot list
   router.get('/get/normal' , generate.get_normal );

   //Get timeslots 
    router.get('/get/timeslots/:id' , generate.get_timeslots );

   //Update selected timeslot
//    router.post('/update' , generate.update );

   //Delete selected timeslot
//    router.delete('/delete' , generate.delete );


//export router
module.exports = router