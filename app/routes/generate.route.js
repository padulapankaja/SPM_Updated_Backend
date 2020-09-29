const express = require('express');
const router = express.Router();
const generate = require("../controllers/generate.controller");
 
   //Get all timeslot list
   router.get('/get/normal' , generate.get_normal );

   //Get timeslots 
    router.get('/get/timeslots/:id' , generate.get_timeslots );

   //Get timeslots 
    router.get('/get/parallel' , generate.get_parallel );

   //Get timeslots 
    router.get('/get/con' , generate.get_con );

    //upload results
    router.post('/upload' , generate.upload );

    //Get lecturer timetble 
    router.get('/get/timetable/:group_id/:lecturer_id' , generate.get_lecturer_table );


//export router
module.exports = router