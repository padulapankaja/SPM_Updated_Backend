const AllocateSess = require("./../models/allocateSess.model");
const Sessions = require('../models/sessions.model');


// exports.add = (req, res) => {
    
//     const buildfreing = new AllocateSess({
//         Session: req.body.Session,
//         date: req.body.date,
//         start_time: req.body.start_time,
//         end_time: req.body.end_time,
//     });

//     buildfreing.save((err, GroupsavedBuilding) => {
//         if(err) return res.status(401).send(err);

//         if(!GroupsavedBuilding) return res.status(400).send("Not created");

//         return res.status(200).send(GroupsavedBuilding);
//     });
// };


// create parallel sessions
exports.add = async (req, res) => {
    
    if (req.body.Session == undefined || req.body.Session == undefined) {
        return res.status(400).send({ message: "2 sessions can not be empty!" });
    }

    const option = { session_01 : req.body.Session}
    const check_session = await AllocateSess.find(option);

    if(check_session.length > 0 ){
        return res.status(200).send({ message: "Already have a Allocated session !" }); 
    }

    let new_parallel = Parallel({
        Session : req.body.Session,
        date: req.body.date,
        start_time: req.body.start_time,
        end_time: req.body.end_time, 
    });

    const saved = await new_parallel.save();
    if(saved === new_parallel) {
        try{
        const success = await Sessions.update({
            _id: { "$in": [req.body.Session ] }
            });

        return res.status(200).send({ message: "Successfully Added !" }); 

        } catch (error) {
            return res.status(400).send({ message: "Update Failed !" }); 
        }

    }else{
        return res.status(400).send({ message: "Not created!" }); 
    }
    
    
};






exports.get = (req, res) => {
    AllocateSess.find()
        .then( alGroup => {
            res.status(200).send(alGroup);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while fetching the data."
            });
        });
};


exports.delete = async (req, res) => {

    console.log(req.params.id);
    
    if (req.params.id == null || req.params.id == undefined) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    
    AllocateSess.findOneAndDelete({ _id: req.params.id })
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
// exports.update = async (req, res) => {

//     if (req.body.id == null || req.body.id == undefined) {
//         res.status(400).send({
//             message: "ID can not be empty!"
//         });
//         return;
//     }

//     const {name, noOfFloors, accessTime} = req.body;
//     console.log(req.body);
    
//     await Building.findOne({_id : req.body.id }, (err, foundBul) => {
//         if(err) return res.status(401).send(err);

//         if(!foundBul) return res.status(404).send("Building not found");

//         if(name){
//             foundBul.name = req.body.name;
//         }
//         if(noOfFloors){
//             foundBul.noOfFloors = req.body.noOfFloors;
//         }
//         if(accessTime){
//             foundBul.accessTime = req.body.accessTime;
//         }

//         foundBul.save((err, savedBul) => {
//             if(err) return res.status(401).send(err);

//             if(!savedBul) return res.status(404).send("Not saved");

//             return res.status(200).send(savedBul);
//         });
//     });

// };

// exports.delete = async (req, res) => {

//     console.log(req.params.id);
    
//     if (req.params.id == null || req.params.id == undefined) {
//         res.status(400).send({
//             message: "Content can not be empty!"
//         });
//         return;
//     }
    
//     Building.findOneAndDelete({ _id: req.params.id })
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

// exports.getOne = async (req, res) => {

//     console.log(req);

//     try {
//         const build = await Building.findOne({ _id: req.params.id });
//         return res.status(200).send({
//             data: build
//         })
//     } catch (error) {
//         console.log(error);
//         return res.status(401).send({
//             error: error
//         })
//     }

// }