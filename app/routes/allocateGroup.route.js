const express = require('express');
const router = express.Router();

const AllocateGroup = require('./../controllers/allocateGroup.controller');

//add building
router.post('/add', AllocateGroup.add);

//get all buildings
router.get('/get', AllocateGroup.get);

// //update building
// router.post('/update', AllocateLec.update);

// //delete building
router.delete('/delete/:id', AllocateGroup.delete);

// //get one building
// router.get('/getOne/:id', AllocateLec.getOne);

module.exports = router