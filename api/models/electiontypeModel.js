var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ElectionType
var ElectionTypeSchema = new Schema({
    election: {
        type: [{
            type: String,
            enum: ['presidentielle','legislatives']
        }],
        default: 'presidentielle'
    },
    annee: {
        type: String,
        required: 'Veuillez saisir une annee'
    },
    libelle: {
        type: String,
        required: 'Veuillez saisir un libelle'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('ElectionType', ElectionTypeSchema);
