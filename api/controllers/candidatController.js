var mongoose = require('mongoose');
var Candidat = mongoose.model('Candidats');

// Candidats
exports.list_all_candidats = function (req, res) {
    Candidat.find({}, function (err, candidat) {
        if (err)
            res.send(err);
        res.json(candidat);
    });
};

exports.create_a_candidat = function (req, res) {
    var new_candidat = new Candidat(req.body);
    new_candidat.save(function (err, candidat) {
        if (err)
            res.send(err);
        res.json(candidat);
    });
};

exports.show_a_candidat = function (req, res) {
    Candidat.findById(req.params.candidatId, function (err, candidat) {
        if (err)
            res.send(err);
        res.json(candidat);
    });
};

exports.update_a_candidat = function (req, res) {
    Candidat.findOneAndUpdate({
        _id: req.params.candidatId
    }, req.body, {
        new: true
    }, function (err, candidat) {
        if (err)
            res.send(err);
        res.json(candidat);
    });
};

exports.delete_a_candidat = function (req, res) {
    Candidat.remove({
        _id: req.params.candidatId
    }, function (err, candidat) {
        if (err)
            res.send(err);
        res.json({
            message: 'candidat successfully deleted'
        });
    });
};


