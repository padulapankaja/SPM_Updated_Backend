const express = require('express');
const router = express.Router();

const AllocateLec = require('./../controllers/allocateLec.controller');

//add building
router.post('/notavailable', AllocateLec.notavailable);

//get all buildings
router.get('/get', AllocateLec.get);

// //update building
// router.post('/update', AllocateLec.update);

// //delete building
router.delete('/delete/:id', AllocateLec.delete);

// //get one building
// router.get('/getOne/:id', AllocateLec.getOne);

module.exports = router