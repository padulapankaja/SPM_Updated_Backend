const express = require('express');
const router = express.Router();

const sController = require('./../controllers/suitable.controller');

//add room
router.post('/add', sController.add);

router.post('/notavailable', sController.notavailable);

//add rooms for a lec
router.post('/forlec', sController.addRoomsForLec);

router.post('/forGroups', sController.addRoomsForGroups);

router.post('/forSubjects', sController.addRoomsForSubject);

router.get('/getAllSessions', sController.get_all_sessions);

router.post('/forSessions', sController.addRoomsForSession);

router.get('/getConSessions', sController.getConSessions);

router.post('/forConSessions', sController.addRoomsForConSession);

module.exports = router