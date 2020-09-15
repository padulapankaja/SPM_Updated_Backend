
//import Lecturer
const Lecturer = require('../models/lecturer.model');





//======================================================================================================
//================================== Register Lecturer  =============================================
//====================================================================================================== 

exports.registerSuperAdmin = function (req, res, next) {
    let new_admin = Admin({
        fname: req.body.firstname,
        lname: req.body.lastname,
        email: req.body.useremail,
        password: req.body.password,
        salt: req.body.salt,
    });
    // check all values 
    if ((new_admin.fname != null || new_admin.fname != undefined)
        && (new_admin.lname != null || new_admin.lname != undefined)
        && (new_admin.password != null || new_admin.password != undefined)
        && (new_admin.email != null || new_admin.email != undefined)
        && (new_admin.salt != null || new_admin.salt != undefined)) {
        console.log(new_admin);
        // check userdata
        Admin.find({ email: new_admin.email }, function (err, docs) {
            if (docs.length == 0) {
                //save 
                new_admin.save(function (err) {
                    if (err) {
                        return next(err);
                    }
                    console.log("New user register");

                    UtilObj.sentEmailforRegisterUsers(new_admin.email)
                    res.status(201).send('Added Successfully');
                })
            } else {
                res.status(403).send('Already have')
            }
        })


    } else {
        res.status(600).send('Not Added');
    }

}



