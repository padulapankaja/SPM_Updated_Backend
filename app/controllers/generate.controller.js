const Sessions = require('../models/sessions.model');
const Timeslots = require('../models/timeslot.model');
const Parallel = require('../models/parallel.model');
const Consecutive = require('../models/conSessions.model');
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


exports.get_parallel = async (req, res) => {
    const parallel = await Parallel.find({});
    
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
                consecutive : 1 ,
                snv : 1,
                rooms : 1
            }
        }
    ]).exec(function (err, result) {
        
        console.log(result.map( i => i._id ))

        const final = parallel.map( item => {
           
            let session_01 = result.find( session => session._id == `${item.session_01}` ); 
            let session_02 = result.find( session => session._id == `${item.session_02}`);
            
            if(session_01 != undefined && session_02 != undefined){
                return {
                    _id : item._id ,
                    session_01 : session_01, 
                    session_02 : session_02
                }
             }else{
                 return { _id : item._id , session_01 : {} , session_02 : {}}
             }
        })
        res.status(200).send({
            data : final
        })

    });

};


exports.get_con = async (req, res) => {
    const consecutive = await Consecutive.find({});
    
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
                consecutive : 1 ,
                snv : 1,
                rooms : 1
            }
        }
    ]).exec(function (err, result) {
        
        console.log(result.map( i => i._id ))

        const final = consecutive.map( item => {
           
            let session_01 = result.find( session => session._id == `${item.session_01}` ); 
            let session_02 = result.find( session => session._id == `${item.session_02}`);
            
            if(session_01 != undefined && session_02 != undefined){
                return {
                    _id : item._id ,
                    session_01 : session_01, 
                    session_02 : session_02
                }
             }else{
                 return { _id : item._id , session_01 : {} , session_02 : {}}
             }
        })
        res.status(200).send({
            data : final
        })

    });

};