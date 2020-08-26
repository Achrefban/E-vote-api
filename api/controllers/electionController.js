var mongoose = require('mongoose');
var Election = mongoose.model('Elections');
// Users
exports.list_all_elections = function (req, res) {
    Election.find({}, function (err, election) {
        if (err)
            res.send(err);

        res.json(election);
    });
};

exports.create_a_election = function (req, res) {
    var new_election = new Election(req.body);
    new_election.save(function (err, election) {
        if (err)
            res.send(err);
        res.json(election);
    });
};

exports.show_a_election = function (req, res) {
    Election.findById(req.params.electionId, function (err, election) {
        if (err)
            res.send(err);
        res.json(election);
    });
};

exports.update_a_user = function (req, res) {
    Election.findOneAndUpdate({
        _id: req.params.electionId
    }, req.body, {
        new: true
    }, function (err, election) {
        if (err)
            res.send(err);
        res.json(election);
    });
};

exports.delete_a_election = function (req, res) {
    Election.remove({
        _id: req.params.electionId
    }, function (err, election) {
        if (err)
            res.send(err);
        res.json({
            message: 'User successfully deleted'
        });
    });
};
exports.show_a_election_ByEtat = function (req, res) {
    Election.findOne({etat: req.body.etat}, function (err, election) {
        if (err)
            res.send(err);
        res.json(election);
    });
};


