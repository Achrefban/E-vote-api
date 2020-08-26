var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Electeur
var ElecteurSchema = new Schema({
    pieceId: {
        type: String,
        required: 'Veuillez saisir la CIN du candidat'
    },
    firstname: {
        type: String,
        required: 'Veuillez saisir le prénom du candidat '
    },
    lastname: {
        type: String,
        required: 'Veuillez saisir votre le nom du candidat'

    },
    sexe: {
        type: String,
        required: 'Veuillez saisir votre le sexe du candidat'
    },
    DateN: {
        type: Date,
        default: Date.now
    },
    Pays: {
        type: String,
        required: 'Veuillez saisir votre nom'
    },
    region: {type: String,
        required: 'Veuillez saisir votre nom'
    },
    cite: {type: String,
        required: 'Veuillez saisir votre nom'
    },
    created_at: {
        type: Date,
        default: Date.now
    }






});

module.exports = mongoose.model('Electeurs', ElecteurSchema);
