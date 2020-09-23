
//import Lecturer
const Lecturer = require('../models/lecturer.model');





//======================================================================================================
//================================== Register Lecturer  =============================================
//====================================================================================================== 



// create user
exports.add_lecturer = async (req, res) => {
    console.log(req.body);
    // Validate request
    if (req.body.name == null || req.body.name == undefined) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }


    let new_lecturer = Lecturer({
        name: req.body.name,
        empId: req.body.empId,
        faculty: req.body.faculty,
        department: req.body.department,
        center: req.body.center,
        building: req.body.building,
        level: req.body.level,
        rank: req.body.rank,
        image: req.body.image
    });
    // Save Tutorial in the database
    try {
        Lecturer.find({ empId: new_lecturer.empId }, function (err, docs) {
            if (docs.length == 0) {
                //save 
                new_lecturer.save(function (err) {
                    if (err) {
                        return next(err);
                    }
                    console.log("New user register");

                    return res.status(201).send(new_lecturer);
                })
            } else {
                return res.status(403).send('Already have')
            }
        })

    } catch (error) {
        return res.status(405).send(error)

    }
};



exports.edit_lecturer = async (req, res) => {
    console.log(req.body);
    if (req.body.empId == null || req.body.empId == undefined) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const update_result = await Lecturer.findOneAndUpdate({name: req.body.name}, 
        { name: req.body.name, faculty: req.body.faculty, department: req.body.department, center: req.body.center, building: req.body.building, level: req.body.level, rank: req.body.rank, image: req.body.image },
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


exports.delete_lecturer = async (req, res) => {

    console.log(req.body);
    if (req.body.empId == null || req.body.empId == undefined) {
        return  res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    var result = await Lecturer.findOneAndDelete({empId: req.body.empId})
    if (!result) {
      return  res.status(400).send({
            message: "No Found"
        });
    }
    return res.status(200).send({
        message: "Deleted success"
    });

}

exports.get_all = async (req, res) => {



    try {
        const lecturer = await Lecturer.find();

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
exports.get_specific_lecturer = async (req, res) => {

    console.log(req.params);

    try {
        const lecturer = await Lecturer.find({  empId: req.params.id });
        console.log(lecturer);
        return res.status(200).send({
            data: lecturer
        })
    } catch (error) {
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
        faculty: word
    }
    if (req.body.filed == "name") {
        column = "name"
        whe = {
            name: word
        }
    }
    else if (req.body.filed == "employeeId") {
        column = "empId"
        whe = {
            empId: word
        }
    }
    else if (req.body.filed == "faculty") {
        column = "faculty"
        whe = {
            faculty: word
        }
    }
    else if (req.body.filed == "department") {
        column = "department"
        whe = {
            department: word
        }
    }
    else if (req.body.filed == "center") {
        column = "center"
        whe = {
            center: word
        }
    }
    else if (req.body.filed == "building") {
        column = "building"
        whe = {
            building: word
        }
    }
    else if (req.body.filed == "level") {
        column = "level"
        whe = {
            level: word
        }
    }
    console.log(column);
    console.log(word);

    try {
        const lecturer = await Lecturer.find( whe );
        return res.status(200).send({
            data: lecturer
        })
    } catch (error) {
        return res.status(401).send({
            error: error
        })
    }

}


