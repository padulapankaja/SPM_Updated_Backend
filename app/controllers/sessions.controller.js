
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




exports.get_all_sessions = (req, res) => {
    Sessions.aggregate([
        {
            $lookup: {
                from: "lecturers", // collection name in db
                localField: "lecturer",
                foreignField: "_id",
                as: "lecturer"
            }
        },
        {
            $lookup: {
                from: "tags", // collection name in db
                localField: "tag",
                foreignField: "_id",
                as: "tag"
            }
        },
        {
            $lookup: {
                from: "subjects", // collection name in db
                localField: "subject",
                foreignField: "_id",
                as: "subject"
            }
        },
        {
            $lookup: {
                from: "students", // collection name in db
                localField: "group",
                foreignField: "_id",
                as: "group"
            }
        },
        {
            $project: {
                lecturer: { $arrayElemAt: ["$lecturer", 0], },
                tag: { $arrayElemAt: ["$tag", 0] },
                subject: { $arrayElemAt: ["$subject", 0] },
                group: { $arrayElemAt: ["$group", 0] },
                no_of_students: 1,
                duration: 1,
                parallel : 1 , 
                consecutive : 1 
            }
        }
    ]).exec(function (err, result) {
        if (err) { return next(err) }

        res.status(200).send({
            result
        })

    });

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


