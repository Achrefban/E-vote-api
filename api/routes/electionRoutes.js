module.exports = function (app) {
    var election = require('../controllers/electionController');
    var cors = require('cors');

    // user Routes
    app.use(cors());
    app.route('/elections')
        .get(election.list_all_elections)
        .post(election.create_a_election);


    app.route('/election/:electionId')
        .get(election.show_a_election)
        .put(election.update_a_user)
        .delete(election.delete_a_election);

    app.route('/election/active')
        .post(election.show_a_election_ByEtat);


};
