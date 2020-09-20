const express = require('express');
const router = express.Router();

const buildingController = require('./../controllers/building.controller');

//add building
router.post('/add', buildingController.add);

//get all buildings
router.get('/get', buildingController.get);

//update building
router.post('/update', buildingController.update);

//delete building
router.delete('/delete/:id', buildingController.delete);

//get one building
router.get('/getOne/:id', buildingController.getOne);

module.exports = router