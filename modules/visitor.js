var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/UserManagement/',{useNewUrlParser:true});
var conn=mongoose.connection;
var visitorschema= new mongoose.Schema({
    User_type:String,
    User_name:[
        {
            firstname:String,
            required:true
        },
        {
            lastname:String,
        }
    ],
    gender:String,
    contactDetails:[
        {
            contactNumber:Number,
            type:personal,
            required:true,
            minlength:[10,"Enter correct contact number"],
        },
        {
            contactNumber:Number,
            type:home,
        },
        {
            emailid:String,
            type:required,
        },
        
    ],
    addressDetails:[
        {
            country:String,
            required:true,
        },
        {
            state:String,
            required:true,
        },
        {
            city:String,
            required:true,
        }
    ],
    // visited_monuments:[{type:mongoose.Schema.Types.ObjectId,ref:''}]
    
    

    
},
{collection:'visitor'});

var visitorModel=mongoose.model('visitors',visitorschema);
module.exports=visitorModel;