const express = require('express');
const router = express.Router();

const statsController = require('./../controllers/stats.controller');

//get student stats
//router.get('/studentGroups', statsController.studentStats);

//get lecturer stats
router.get('/lecStats', statsController.lecturerStats);

//get subject stats
router.get('/subStats', statsController.subjectsStats);

module.exports = router