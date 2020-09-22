const express = require('express');
const router = express.Router();

const conSession = require('../controllers/conSession.controller');


//======================================================================================================
//===================================  POST REQUEST       ==============================================
//====================================================================================================== 

     // Create new  group
     router.post('/add', conSession.add );
       
     //Get all group list
    //  router.get('/get' , conSession.get );
 
     //Update selected group
    //  router.post('/update' , conSession.update );
 
     //Delete selected group
    //  router.delete('/delete/:id' , conSession.delete );


//export router
module.exports = router
