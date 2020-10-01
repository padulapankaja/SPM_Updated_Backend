const express = require('express');
const router = express.Router();

const roomController = require('./../controllers/room.controller');

//add room
router.post('/add', roomController.add);

//get all rooms
router.get('/get', roomController.get);

//update room
router.post('/update', roomController.update);

//delete room
router.delete('/delete/:id', roomController.delete);

//get one room
router.get('/getOne/:id', roomController.getOne);

router.get('/getOneByName/:id', roomController.getOneByName);

module.exports = router