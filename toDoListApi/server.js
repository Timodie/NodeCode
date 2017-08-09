app = require('./app');
var port = process.env.PORT || 3000;






//app.listen(port);
var server = app.listen(port,function(){
  console.log('todo list RESTful API server started on: ' + port);
});
