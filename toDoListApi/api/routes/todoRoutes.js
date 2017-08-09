'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/todoController');
  var slyde    = require('../models/slydePay');
  var slydeRouter = require('../controllers/slydeController');

  // todoList Routes
  app.route('/add_tasks')
    .post(todoList.create_a_task);

  app.route('/alltasks')
    .get(todoList.list_all_tasks);

  app.route('/tasks/:taskId')
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);

  app.route('/slyde')
    .get(slydeRouter.list_all_slyde)
    .post(slydeRouter.create_slyde);

  app.route('/awesomeapp/callback')
  .get(slydeRouter.list_all_slyde)
  .post(slydeRouter.create_slyde);

    app.use(function(req, res) {
      res.status(404).send({url: req.originalUrl + ' not found'})
    });
};
// .get(function(req,res){
//   res.send({"hello":"awesomeapp"});
// });
