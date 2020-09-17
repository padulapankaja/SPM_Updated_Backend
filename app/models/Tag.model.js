const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tag = new Schema({
    
    name: {
        type: String,
        unique: true

    },

});
module.exports = mongoose.model('tag', Tag);
