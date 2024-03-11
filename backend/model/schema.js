const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/user-data');

const model = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:Number
});

const userSchema = new mongoose.model('user',model);

module.exports =userSchema;