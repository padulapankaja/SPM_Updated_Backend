const express = require('express');
const router = express.Router();

const AllocateSession = require('./../controllers/allocateSess.controller');

//add building
router.post('/add', AllocateSession.add);

//get all buildings
router.get('/get', AllocateSession.get);

// //update building
// router.post('/update', AllocateLec.update);

// //delete building
router.delete('/delete/:id', AllocateSession.delete);

// //get one building
// router.get('/getOne/:id', AllocateLec.getOne);

module.exports = router