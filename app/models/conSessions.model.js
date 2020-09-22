const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ConSession = new Schema({
    
    id: {
        type: String,
        unique : true,
    },
    ConSession: {
        type: String,
    },

});
module.exports = mongoose.model('conSession', ConSession);
