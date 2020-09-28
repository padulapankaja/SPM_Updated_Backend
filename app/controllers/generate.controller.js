const Sessions = require('../models/sessions.model');
const Timeslots = require('../models/timeslot.model');
const moment = require('moment'); 


exports.get_normal = (req, res) => {

    const options = { $and : [ { 'parallel': false },{ 'consecutive': false }]} 


    Sessions.aggregate([
        {
            $match : options
        },
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
                consecutive : 1 ,
                snv : 1,
                rooms : 1,
            }
        }
    ]).exec(function (err, result) {
        if (err) { return next(err) }

        res.status(200).send({
            data : result
        })

    });

};


exports.get_timeslots = (req, res) => {
    Timeslots.find({ group_id : req.params.id})
        .then( workingdays => {
            res.status(200).send(workingdays);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching the data."
            });
        });

};