const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Subject = new Schema({



    year: {
        type: Number,


    },
    semester: {
        type: String,


    },
    name: {
        type: String,

    },
    code: {
        type: String,

        unique: true
    },
    lechours: {
        type: Number,
    },
    tutehours: {
        type: Number,

    },
    labhours: {
        type: Number,
    },
    evaluationhour: {
        type: Number,

    },



});
module.exports = mongoose.model('subject', Subject);
