const express = require('express');
const router = express.Router();

const Tag = require('../controllers/Tag.controller');

// test 




//======================================================================================================
//===================================  POST REQUEST       ==============================================
//====================================================================================================== 
  // Create new  group
  router.post('/add', Tag.add );
       
  //Get all group list
  router.get('/get' , Tag.get );

//   //Update selected group
  router.post('/update' , Tag.update );

//   //Delete selected group
//   router.delete('/delete/:id' , tag.delete );

//       //get one building
      router.get('/getOne/:id', Tag.getOne);



//export router
module.exports = router
