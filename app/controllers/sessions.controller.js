
//import Lecturer
const Sessions = require('../models/sessions.model');
const Lecturers = require('../models/lecturer.model');
const Tags = require('../models/Tag.model');
const Subjects = require('../models/subject.model');
const Student = require('../models/student.model');
//======================================================================================================
//================================== Register Lecturer  =============================================
//====================================================================================================== 

// create user
exports.add_session = async (req, res) => {
    console.log(req.body);
    // Validate request
    if ((req.body.lecturer == null || req.body.lecturer == undefined) || (req.body.tag == null || req.body.group == undefined) || (req.body.group == null || req.body.tag == undefined)) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }


    let sessions = Sessions({
        lecturer: req.body.lecturer,
        tag: req.body.tag,
        subject: req.body.subject,
        group: req.body.group,
        no_of_students: req.body.no_of_students,
        duration: req.body.duration,

    });
    // Save Tutorial in the database
    try {
        //save 
        sessions.save(function (err) {
            if (err) {
                return next(err);
            }
            console.log("New Session added");
            return res.status(201).send(sessions);
        })


    } catch (error) {
        return res.status(405).send(error)

    }
};

// get all information 
exports.all_info = async (req, res) => {
    try {
        const lecturers = await Lecturers.find({}, '_id name');
        const tags = await Tags.find({}, '_id name');
        const subjects = await Subjects.find({}, '_id name code');
        const students = await Student.find({}, '_id subgroup_ID');


        return res.status(200).send({
            lecturers,
            tags, subjects, students,
        })



    } catch (error) {
        return res.status(401).send({ error: error })
    }
};




exports.get_all = async (req, res) => {



    try {
        const lecturer = await Subject.find();

        return res.status(200).send({
            data: lecturer
        })
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            error: error
        })
    }

}




exports.get_filtered = async (req, res) => {
    console.log(req.body);
    var word = req.body.word;
    var column
    var whe = {
        year: word
    }
    if (req.body.filed == "year") {
        column = "name"
        whe = {
            year: word
        }
    }
    else if (req.body.filed == "semester") {
        column = "semester"
        whe = {
            semester: word
        }
    }
    else if (req.body.filed == "name") {
        column = "name"
        whe = {
            name: word
        }
    }
    else if (req.body.filed == "code") {
        column = "code"
        whe = {
            code: word
        }
    }


    console.log(column);
    console.log(word);

    try {
        const subjects = await Subject.find(whe);
        return res.status(200).send({
            data: subjects
        })
    } catch (error) {
        return res.status(401).send({
            error: error
        })
    }
}


