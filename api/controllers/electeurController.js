var mongoose = require('mongoose');
var Electeur = mongoose.model('Electeurs');

// Electeurs
exports.list_all_electeurs = function (req, res) {
    Electeur.find({}, function (err, electeur) {
        if (err)
            res.send(err);
        res.json(electeur);
    });
};

exports.create_a_electeur = function (req, res) {
    var new_electeur = new Electeur(req.body);
    new_electeur.save(function (err, electeur) {
        if (err)
            res.send(err);
        res.json(electeur);
    });
};

exports.findBySexe = function(req, res) {
    Electeur.count({ Sexe: "Homme" }, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.json(result);
      }
    });
  };

exports.show_a_electeur = function (req, res) {
    Electeur.findById(req.params.electeurId, function (err, electeur) {
        if (err)
            res.send(err);
        res.json(electeur);
    });
};

exports.update_a_electeur = function (req, res) {
    Electeur.findOneAndUpdate({
        _id: req.params.electeurId
    }, req.body, {
        new: true
    }, function (err, electeur) {
        if (err)
            res.send(err);
        res.json(electeur);
    });
};

exports.delete_a_electeur = function (req, res) {
    Electeur.findOneAndRemove({
        _id: req.params.electeurId
    }, function (err, electeur) {
        if (err)
            res.send(err);
        res.json({
            message: 'electeur successfully deleted'
        });
    });

};

exports.show_electeur_pieceId = function (req, res) {
    Electeur.findOne({pieceId: req.params.pieceId}, function (err, electeur) {
        if (err)

            res.send(err);
        res.json(electeur);
    });
};

exports.getLates = function (req, res) {
    Electeur.findOne().sort({"_id": -1})
    .exec(function(err, data) {
        if (err) {
            console.log('Error getting data..');
        } 
        if (data) {
            res.json(data);
        }
        else {
            console.log('No data found!');
        }
    });
};



