const express = require('express');
const router = express.Router();

const sController = require('./../controllers/suitable.controller');

//add room
router.post('/add', sController.add);

//add rooms for a lec
router.post('/forlec', sController.addRoomsForLec);

router.post('/forGroups', sController.addRoomsForGroups);

router.post('/forSubjects', sController.addRoomsForSubject);

router.get('/getSessions', sController.getAllSessions);

module.exports = router