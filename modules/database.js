var mongoose=require('mongoose');
mongoose.set('strictQuery', false);
mongoose.connect('mongodb://127.0.0.1:27017/UserManagement',{useNewUrlParser:true});
var conn=mongoose.connection;
var touristschema= new mongoose.Schema({
    siteID:Number,
    siteName:String,
    siteType:String,
    siteDescription:String,
    siteAddress:{
        
            country:{
            type:String,
            required:true,
            },
        
        
            state:{
                type:String,
                required:true,
            },
        
        
            city:{
                type:String,
                required:true,
            }
            
        

   },
    siteOpenTime:String,
    siteCloseTime:String,
    ticketPrice:{
        
            adult:{
            type:Number,
            required:true,},
        
        
            child:{
                type:Number,
            },
        
        
            foreginer:{
                type:Number,
            }
        
    },
    Availability:String,
    image:String,
    contactDetails:{
        
            contactNumber:{
            type:Number,
            required:true,
          
        },
        
        
            contactEmail:{
            type:String,
            required:true,
        }
        
},
 season:String,

    
    
});
var touristModel=mongoose.model('touristsites',touristschema);
module.exports=touristModel;