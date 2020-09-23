const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Sessions = new Schema({

    lecturer: {
        type: Schema.Types.ObjectId,
       
    },
    tag: {
        type: Schema.Types.ObjectId,
        

    },
    subject: {
        type: Schema.Types.ObjectId,

    },
    group: {
        type: Schema.Types.ObjectId,

    },
    no_of_students: {
        type: String,

    },
    duration: {
        type: String,
    }


});
module.exports = mongoose.model('sessions', Sessions);
