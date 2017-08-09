var express = require('express');
var app = express();
var http = require('http');
http.post = require('http-post');
var request = require('request');
mongoose = require('mongoose'),
Task = require('./api/models/todoModel'),
bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/Tododb');
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };
mongoose.connect('mongodb://taddaifor:EMAchines123@ds127063.mlab.com:27063/taddaiforrestful',options);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var headers = {
  'Content-Type':'application/json'
}

// Configure the request
var options = {
  uri: 'https://app.slydepay.com.gh/api/merchant/invoice/payoptions',
  method: 'POST',
  headers: headers,
  form: {
    'emailOrMobileNumber': 'timodie.addai@gmail.com',
    'merchantKey': '1500541043876'
      }
    }

app.get('/slyder',function(req,res){

  request(options, function (error, res, body) {
    console.log("inside request");
      if (!error && res.statusCode == 200) {
          // Print out the response body
        res.json(body)
      }
      else{
          console.log("ERRR is :"+error);
          console.log("RESPONSE :"+res);
          console.log("BODY:"+body);
          return res.status(500).send("there was a problem");
      }

  })
});
var routes = require('./api/routes/todoRoutes');
var slydeRoutes = require('./api/routes/slydeRoutes');
routes(app);


module.exports = app;
