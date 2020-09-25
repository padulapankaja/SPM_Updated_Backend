const express = require('express');
const router = express.Router();

const workingdays = require("../controllers/workingdays.controller");

  // Create new Working days group
  router.post("/add", workingdays.add );
       
  //Get all working days group list
  router.get('/get' , workingdays.get );

  //Get all working days group list single
   router.get('/get/:id' , workingdays.getsingle );

  //Update selected working day group
  router.post('/update' , workingdays.update );

  //Delete selected working day group
  router.delete('/delete' , workingdays.delete );


//export router
module.exports = router
