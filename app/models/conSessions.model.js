const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ConSession = new Schema({
    
    ConSession: {
        type: [],
    },

});
module.exports = mongoose.model('conSession', ConSession);
