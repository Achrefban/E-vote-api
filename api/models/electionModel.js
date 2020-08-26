var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Election
var ElectionSchema = new Schema({
    electionName:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ElectionType"
    }],
    candidatElection: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Candidat"
    }],
    descriptionElection: {
        type: String,
        required: 'Veuillez saisir votre nom'

    },
    etat: {
        type: String,
        required: 'desactive'

    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Elections', ElectionSchema);
