var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User
var UserSchema = new Schema({
    role: {
        type: [{
            type: String
        }],
        default: 'respEnregistrement'
    },
    firstname: {
        type: String,
        required: 'Veuillez saisir votre prénom'
    },
    lastname: {
        type: String,
        required: 'Veuillez saisir votre nom'
    },
    email: {
        type: String,
        required: 'Veuillez saisir votre email'
    },
    password: {
        type: String,
        required: 'Veuillez saisir votre passeword',
        select: false
    },
    photo: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', UserSchema);
