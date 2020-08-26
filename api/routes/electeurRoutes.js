module.exports = function (app) {
    var electeur = require('../controllers/electeurController');
    var cors = require('cors');

    // eVote candidats Routes
    app.use(cors());
    app.route('/electeurs')
        .get(electeur.list_all_electeurs)
        .post(electeur.create_a_electeur);


    app.route('/electeurs/:electeurId')
        .get(electeur.show_a_electeur)
        .put(electeur.update_a_electeur)
        .delete(electeur.delete_a_electeur);

    app.route('/electeurs/pieceId/:pieceId')
        .get(electeur.show_electeur_pieceId);
    
        app.route('/count')
        .get(electeur.findBySexe);

        app.route('/latest')
        .get(electeur.getLates);


};

