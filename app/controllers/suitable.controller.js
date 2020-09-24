const Tag = require('../models/Tag.model');
const Lecturer = require('../models/lecturer.model');
const Student = require('../models/student.model');
const Subject = require('../models/subject.model');
const Session = require('../models/sessions.model');

exports.add = (req, res) => {

    if(req.body.name == undefined && req.body.rooms == undefined){
        return res.status(400).send({message : 'name, rooms required'})
    }

    const conditions = { name : req.body.name}
    const update = {$set:{ rooms: req.body.rooms}}

    Tag.findOneAndUpdate(conditions , update , {new: true}, (err, updated) => {
         if(err) { return res.status(401).send(err); }
        console.log(updated)
        return res.json({ data : updated})
    });

}

exports.addRoomsForLec = (req, res) => {

    if(req.body.id == undefined && req.body.rooms == undefined){
        return res.status(400).send({message : 'id, rooms required'})
    }

    console.log(req.body);

    const conditions = { _id : req.body.id}
    const update = {$set:{ rooms: req.body.rooms}}

    Lecturer.findOneAndUpdate(conditions , update , {new: true}, (err, updated) => {
         if(err) { return res.status(401).send(err); }
        console.log(updated)
        return res.json({ data : updated})
    });

}

exports.addRoomsForGroups = (req, res) => {

    if(req.body.id == undefined && req.body.rooms == undefined){
        return res.status(400).send({message : 'id, rooms required'})
    }

    console.log(req.body);

    const conditions = { _id : req.body.id}
    const update = {$set:{ rooms: req.body.rooms}}

    Student.findOneAndUpdate(conditions , update , {new: true}, (err, updated) => {
         if(err) { return res.status(401).send(err); }
        console.log(updated)
        return res.json({ data : updated})
    });

}

exports.addRoomsForSubject = (req, res) => {

    if(req.body.id == undefined && req.body.rooms == undefined){
        return res.status(400).send({message : 'id, rooms required'})
    }

    console.log(req.body);

    const conditions = { _id : req.body.id}
    const update = {$set:{ rooms: req.body.rooms}}

    Subject.findOneAndUpdate(conditions , update , {new: true}, (err, updated) => {
         if(err) { return res.status(401).send(err); }
        console.log(updated)
        return res.json({ data : updated})
    });

}

exports.getAllSessions = async (req, res) => {

    console.log(req.body);

    await Session.find({}, async (err, foundSession) => {
        if(err) return res.status(401).send(err);

        let sendData = {
            name: "",
            id: "",
        }
        let sendDataArray = []
        //return res.status(200).send(foundSession);
        //let sub = await Subject.find({_id: foundSession.Subject}).name;
        foundSession.forEach(element => {
            console.log(element.subject.name)
            console.log(element.tag.name)

            // let sub = Subject.find({_id: element.subject});
            // console.log("Subject name: ", sub);
            //let sub = Subject.findById(element.subject);
            //console.log("Subject: ", sub);
            // let sub = "";
            // Subject.find({_id: element.subject}, (err, foundSub) => {
            //     if(err) return res.status(401).send(err);

            //     sub = foundSub[0].name;
            //     console.log(foundSub[0].name);
            // })
            

            // let tag = "";
            // Tag.find({_id: element.tag}, (err, foundTag) => {
            //     if(err) return res.status(401).send(err);

            //     tag = foundTag[0].name;
            //     console.log(foundTag);
            // })
            

            // sendData = {
            //     name: sub + " " + tag,
            //     id: foundSession._id
            // }

            // console.log(sendData);

            // sendDataArray.push(sendData);

            // sendData = {
            //     name: "",
            //     id: ""
            // }
        });
        // let sub = foundSession.subject;
        // console.log(sub);
        //return res.status(200).send(sendDataArray);
    });
}

