
//import Session
const ConSessions = require('../models/conSessions.model');


// create user
exports.add = async (req, res) => {
    console.log("menna meka",req.body);

    let newConSession = ConSessions({
        id: req.body.id,
        ConSession : req.body.ConSession,
    });
    console.log("subgroup_ID : " , newConSession.subgroup_ID);
    // Save Tutorial in the database
    try {
        ConSessions.findOne({ id: newConSession.id }, function (err, docs) {
            // if (docs.length == 0) {
                //save 
                newConSession.save(function (err) {
                    if (err) {
                        console.log(err);
                        return err;
                    }
                    console.log("New user register");

                    return res.status(200).send(newConSession);
                })
            // } else {
            //     return res.status(403).send('Already have')
            // }
        })

    } catch (error) {
        return res.status(405).send(error)

    }
};



// exports.update = async (req, res) => {
//     console.log(req.body);
    // if (req.body.empId == null || req.body.empId == undefined) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    // }

//     const update_result = await ConSessions.findOneAndUpdate({academicYear: req.body.academicYear}, 
//         { academicYear: req.body.academicYear,
//             semester: req.body.semester ,
//             group_mo: req.body.group_mo , 
//             subgroup_mo: req.body.subgroup_mo , 
//             program: req.body.program,
//             subgroup_ID: req.body.subgroup_ID },
//         { new: true }
//     ).then(result =>
//         res.status(200).send({
//             message: "Successfully update"
//         })
//     )
//         .catch(err =>
//             res.status(400).send({
//                 message: err
//             })
//         )


// }

// exports.delete = async (req, res) => {

//     console.log(req.params.id);
    
//     if (req.params.id == null || req.params.id == undefined) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//         return;
//     }
    
//     ConSessions.findOneAndDelete({ _id: req.params.id })
//     .then( result => {

//         if (!result) {
//             throw new Error('No record found')
//         }

//         res.status(200).send({
//             message: "Deleted successfully"
//         });
    
//     })
//     .catch(err => {
//         res.status(500).send({
//             message:
//                 err.message || "Some error occurred while deleting the data."
//         });
//     });   
   
// }


// exports.delete = async (req, res) => {

//     console.log(req.body);
//     // if (req.body.empId == null || req.body.empId == undefined) {
//     //     return  res.status(400).send({
//     //         message: "Content can not be empty!"
//     //     });
//     // }
//     var result = await Student.findOneAndDelete({id: req.body._id})
//     if (!result) {
//       return  res.status(400).send({
//             message: "No Found"
//         });
//     }
//     return res.status(200).send({
//         message: "Deleted success"
//     });

// }

// exports.get = async (req, res) => {

//     try {
//         const lecturer2 = await ConSessions.find();

//         return res.status(200).send({
//             data: lecturer2
//         })
//     } catch (error) {
//         console.log(error);
//         return res.status(401).send({
//             error: error
//         })
//     }

// }

// exports.getOne = async (req, res) => {

//     console.log(req.params.id);

//     try {
//         const lecturessr = await ConSessions.findOne({  _id: req.params.id });
//         console.log(lecturessr);
//         return res.status(200).send({
//             data: lecturessr
//         })
//     } catch (error) {
//         return res.status(401).send({
//             error: error
//         })
//     }
// }


