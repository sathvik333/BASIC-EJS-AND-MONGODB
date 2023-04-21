var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/UserManagement',{useNewUrlParser:true});
var conn=mongoose.connection;
var ticketschema= new mongoose.Schema({

    "ticketid":"Number",
    "booking-id":"Number",
    "date-of-visit":"Number",
    "visiting-hour":"Number",
    "Valid-date":"Number",
    "Valid-time":"Number",
    "Isvalid":"String",

})
var touristModel=mongoose.model('tickets',ticketschema);
module.exports=touristModel;