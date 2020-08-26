var mongoose = require('mongoose');
var ElectionType = mongoose.model('ElectionType');


// ElectionType
exports.list_all_electionType = function (req, res) {
    ElectionType.find({}, function (err, electionType) {
        if (err)
            res.send(err);
        res.json(electionType);
    });
};

exports.create_a_electionType = function (req, res) {
    var new_electionType = new ElectionType(req.body);
    new_electionType.save(function (err, electionType) {
        if (err)
            res.send(err);
        res.json(electionType);
    });
};

exports.show_a_electionType = function (req, res) {
    ElectionType.findById(req.params.electionTypetId, function (err, electionType) {
        if (err)
            res.send(err);
        res.json(electionType);
    });
};

exports.update_a_electionType = function (req, res) {
    Candidat.findOneAndUpdate({
        _id: req.params.electionTypeId
    }, req.body, {
        new: true
    }, function (err, electionType) {
        if (err)
            res.send(err);
        res.json(electionType);
    });
};

exports.delete_a_electionType = function (req, res) {
    ElectionType.remove({
        _id: req.params.electionTypeId
    }, function (err, electionType) {
        if (err)
            res.send(err);
        res.json({
            message: 'candidat successfully deleted'
        });
    });
};


