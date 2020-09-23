const express = require('express');
const router = express.Router();

const sessionController = require('./../controllers/sessions.controller');

//get student stats
router.post('/add', sessionController.add_session);


//get student stats
router.get('/get/allinfo', sessionController.all_info);
router.get('/all', sessionController.get_all_sessions);

module.exports = router;