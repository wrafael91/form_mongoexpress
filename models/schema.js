const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    name: String,
    lastname: String,
    email: String,
    password: String,
    country: String,
    status: {
        type: Boolean,
        default: false
    }
});

TaskSchema.pre('save', function(next){
    bcrypt.genSalt(10).then(salts => {//Se generan los 'salts'
        bcrypt.hash(this.password, salts).then(hash => {// Se ejecuta el metodo 'hash' para encriptar los caracteres
            this.password = hash;
            next();
        }).catch(error => next(error));
    }).catch(error => next(error));
})

module.exports = mongoose.model('database',TaskSchema);