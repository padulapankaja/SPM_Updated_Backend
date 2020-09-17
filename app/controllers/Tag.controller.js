
//import Lecturer
const Tag = require('../models/Tag.model');





//======================================================================================================
//================================== Register Lecturer  =============================================
//====================================================================================================== 



// create user
exports.add = async (req, res) => {
    console.log(req.body);
    // Validate request
    // if (req.body.name == null || req.body.name == undefined) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    // }


    let new_lecturer = Tag({
        name: req.body.name,
    });
    // Save Tutorial in the database
    try {
        Tag.find({ name: new_lecturer.name }, function (err, docs) {
            // if (docs.length == 0) {
                //save 
                new_lecturer.save(function (err) {
                    if (err) {
                        return err;
                    }
                    console.log("New user register");

                    return res.status(201).send(new_lecturer);
                })
            // } else {
            //     return res.status(403).send('Already have')
            // }
        })

    } catch (error) {
        return res.status(405).send(error)

    }
};



exports.update = async (req, res) => {
    console.log(req.body);
    // if (req.body.empId == null || req.body.empId == undefined) {
    //     res.status(400).send({
    //         message: "Content can not be empty!"
    //     });
    //     return;
    // }

    const update_result = await Tag.findOneAndUpdate({name: req.body.name}, 
        { name: req.body.name },
        { new: true }
    ).then(result =>
        res.status(200).send({
            message: "Successfully update"
        })
    )
        .catch(err =>
            res.status(400).send({
                message: err
            })
        )
}


// exports.delete_lecturer = async (req, res) => {

//     console.log(req.body);
//     if (req.body.empId == null || req.body.empId == undefined) {
//         return  res.status(400).send({
//             message: "Content can not be empty!"
//         });
//     }
//     var result = await Lecturer.findOneAndDelete({empId: req.body.empId})
//     if (!result) {
//       return  res.status(400).send({
//             message: "No Found"
//         });
//     }
//     return res.status(200).send({
//         message: "Deleted success"
//     });

// }

exports.get = async (req, res) => {

    try {
        const lectddurer = await Tag.find();

        return res.status(200).send({
            data: lectddurer
        })
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            error: error
        })
    }
}


exports.getOne = async (req, res) => {

    console.log(req.params);

    try {
        const ledsdscturer = await Tag.findOne({  _id: req.params.id });
        console.log(ledsdscturer);
        return res.status(200).send({
            data: ledsdscturer
        })
    } catch (error) {
        return res.status(401).send({
            error: error
        })
    }

}



// exports.get_filtered = async (req, res) => {

//     console.log(req.body);
//     var word = req.body.word;
//     var column
//     var whe = {
//         faculty: word
//     }
//     if (req.body.filed == "name") {
//         column = "name"
//         whe = {
//             name: word
//         }
//     }
//     else if (req.body.filed == "employeeId") {
//         column = "empId"
//         whe = {
//             empId: word
//         }
//     }
//     else if (req.body.filed == "faculty") {
//         column = "faculty"
//         whe = {
//             faculty: word
//         }
//     }
//     else if (req.body.filed == "department") {
//         column = "department"
//         whe = {
//             department: word
//         }
//     }
//     else if (req.body.filed == "center") {
//         column = "center"
//         whe = {
//             center: word
//         }
//     }
//     else if (req.body.filed == "building") {
//         column = "building"
//         whe = {
//             building: word
//         }
//     }
//     else if (req.body.filed == "level") {
//         column = "level"
//         whe = {
//             level: word
//         }
//     }
//     console.log(column);
//     console.log(word);

//     try {
//         const lecturer = await Lecturer.find( whe );
//         return res.status(200).send({
//             data: lecturer
//         })
//     } catch (error) {
//         return res.status(401).send({
//             error: error
//         })
//     }

// }


