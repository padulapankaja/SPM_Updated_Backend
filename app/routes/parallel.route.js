const express = require('express');
const router = express.Router();

const Parallel = require('../controllers/parallel.controller');


//======================================================================================================
//===================================  POST REQUEST       ==============================================
//====================================================================================================== 

    // Create new  group
    router.post("/add", Parallel.add );
       
    //Get all group list
    router.get('/get' , Parallel.get );

    // //Update selected group
    // router.post('/update' , student.update );

    // //Delete selected group
    // router.delete('/delete/:id' , student.delete );

        //get one building
        // router.get('/getOne/:id', student.getOne);


//export router
module.exports = router
