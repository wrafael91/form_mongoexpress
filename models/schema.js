const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: String,
    email: String,
    country: String,
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('database',TaskSchema);