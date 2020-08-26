var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Candidat
var CandidatSchema = new Schema({
    cin: {
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
    partiPolitique: {
        type: String,
        required: 'Veuillez saisir le parti politique'
    },
    numero: {
        type: String,
        required: 'Veuillez saisir le numero'

    },
    photo: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }


});

module.exports = mongoose.model('Candidats', CandidatSchema);
