const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    heading: {
        type: String,
        require: true
    },
    news: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        require: true
    },
    work: {
        type: String,
        require: true
    },
    about: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    cpassword: {
        type: String,
        require: true
    },
    profilepic: {
        type: String,
        require: true
    },

})






const User = mongoose.model('USER', userSchema);
module.exports = User;


