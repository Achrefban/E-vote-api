module.exports = function (app) {
    var candidat = require('../controllers/candidatController');
    var cors = require('cors');

    // eVote candidats Routes
    app.use(cors());
    app.route('/candidats')
        .get(candidat.list_all_candidats)
        .post(candidat.create_a_candidat);


    app.route('/candidat/:candidatId')
        .get(candidat.show_a_candidat)
        .put(candidat.update_a_candidat)
        .delete(candidat.delete_a_candidat);
    


};
