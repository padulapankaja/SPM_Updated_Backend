
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


exports.delete = async (req, res) => {

    console.log(req.params.id);
    
    if (req.params.id == null || req.params.id == undefined) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    Tag.findOneAndDelete({ _id: req.params.id })
    .then( result => {

        if (!result) {
            throw new Error('No record found')
        }

        res.status(200).send({
            message: "Deleted successfully"
        });
    
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while deleting the data."
        });
    });   
   
}

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
