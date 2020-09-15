const express = require('express');
const router = express.Router();

const lecturerController = require('../controllers/lecturer.controller');

// test 




//======================================================================================================
//===================================  POST REQUEST       ==============================================
//====================================================================================================== 
// admin register
router.post('/ad/s/am',  adminController.registerSuperAdmin);


//export router
module.exports = router






// admin user details

// {
//     "firstname": "padula",
//     "lastname": "guruge",
//     "useremail": "admin@gmail.com",
//     "password": "3e7b5eeb847c9b359284274aefa78e4be9723f2301231343966a3de12c9999de",
//     "salt":"ok9ccKo9K9FWzLCcFVCL"
// }


// requset

// {
// 	"uEmail" : "admin@gmail.com",
// 	"uPass" : "3e7b5eeb847c9b359284274aefa78e4be9723f2301231343966a3de12c9999de",
// 	"keepme" : true
// }