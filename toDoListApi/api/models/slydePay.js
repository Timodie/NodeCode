var mongoose = require('mongoose');

var SlydeSchema = new mongoose.Schema({
  status :Number,
  transac_id:String,
  cust_ref:String,
  pay_token:String
});
module.exports = mongoose.model('slyde',SlydeSchema); 
