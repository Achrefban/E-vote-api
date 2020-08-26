module.exports = function (app) {
    var electiontype = require('../controllers/electiontypeController');
    var cors = require('cors');

    // ElectionType Routes
    app.use(cors());
    app.route('/electionType')
        .get(electiontype.list_all_electionType)
        .post(electiontype.create_a_electionType);


    app.route('/electionType/:electionTypeId')
        .get(electiontype.show_a_electionType)
        .put(electiontype.update_a_electionType)
        .delete(electiontype.delete_a_electionType);
    


};
