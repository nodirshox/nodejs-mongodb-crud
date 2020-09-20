const mongoose = require('mongoose')

var TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        default: ''
    },
    is_active: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Task', TaskSchema);