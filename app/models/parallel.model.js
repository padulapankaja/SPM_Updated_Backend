const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Parallel = new Schema({

    start: {
        type: String,
        // unique: true
    },
    end: {
        type:String ,
        // unique: true

    },
    date: {
        type: Date,

    },
    duration: {
        type: Number,

    },

});
module.exports = mongoose.model('parallel', Parallel);
