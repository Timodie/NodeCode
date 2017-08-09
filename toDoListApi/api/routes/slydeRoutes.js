'use strict'

module.export = function(app){
  var slyde = require('../controllers/slydeController');


  app.route('/slyde')
    .get(slyde.test_slyde);

  app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found in slyde routes'})
    });
};
