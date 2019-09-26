var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    username: {
        type: String
    },
    password: {
        type: String,
        required: true,
    },
    passwordConf: {
        type: String,
        required: false,
    }
});
var User = mongoose.model('User', UserSchema);
module.exports = User;