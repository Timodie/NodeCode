//'use strict'

var mongoose = require('mongoose');
//fetch slyde model here
Slyde = mongoose.model('slyde');
var slyde    = require('../models/slydePay');


exports.read_a_slyde = function(req,res){
  Slyde.findById(req.params.slydeId,function(err,slyde){
    if(err)
      res.send(err);
    res.json(slyde);
  });
}


exports.create_slyde = function(req,res){
  slyde.create({
    status:req.body.status,
    transac_id:req.body.transac_id,
    cust_ref:req.body.cust_ref,
    pay_token:req.body.pay_token
  },
  function(err,slydeResponse){
    if(err)
      return res.status(500).send("there was a problem");

      res.status(200).send(slydeResponse);
    });
}

exports.list_all_slyde = function(req,res){
  Slyde.find({},function(err,slyde){
    if(err)
      res.send(err);
    res.json(slyde);
  });
};

exports.list_all_payment_options = function(req,res){
//   var headers = {
//     'Content-Type':     'application/json'
// }
//
// // Configure the request
// var options = {
//     url: 'https://app.slydepay.com.gh/api/merchant/invoice/payoptions',
//     method: 'POST',
//     headers: headers,
//     form: {'emailOrMobileNumber': 'timodie.addai@gmail.com',
//            'merchantKey': '1500541043876'
//         }
// }
// // Start the request
// request(options, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         // Print out the response body
//         console.log(body)
//     }
// })

};
