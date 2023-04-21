const express = require('express')
const bodyParser = require('body-parser')
// const { body, validationResult, check } = require('express-validator');
const path=require('path');
const { urlencoded } = require('body-parser');

var touristModel=require('../../modules/database');




const app = express()
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
var tourist=touristModel.find({});
app.get('/',(req,res)=>
{
  var tourist=touristModel.find({})
  tourist.exec(function (err, data) {
    if (err) throw err;
    res.render("home",{touristsites:data})
  })
})

app.get('/login',(req,res)=>{
  res.render('login');
})
app.get('/register',(req,res)=>{
  res.render('register')
})
// 

//app.use(express.static(path.join(__dirname,'public')));


app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'));

// app.get('/',(req,res)=>{
//   var tourist=touristModel.find({});
//   tourist.exec(function(err,data){
//     if(err) throw err;
//     res.render('index.ejs',{title:"TOURIST PLACES",tdata:data,success:""})
//   })

// })

app.get('/input',(req,res)=>{
  res.render('input',{title:"TOURIST DETAILS"})
})
app.post("/input",(req,res,next)=>{
  var toudetails=new touristModel({
    siteID:parseInt(req.body.sid),
    siteName:req.body.sname,
    siteType:req.body.sitetype,
    siteDescription:req.body.sdiscription,
    siteAddress:{
    country:req.body.country,
    state:req.body.state,
    city:req.body.city,
    },
    siteOpenTime:req.body.sot,
    siteCloseTime:req.body.sct,
    ticketPrice:{
    adult:parseInt(req.body.adult),
    child:parseInt(req.body.child),
    foreginer:parseInt(req.body.foreginer),
    },
    Availability:req.body.available,
    contactDetails:{
    contactNumber:req.body.phone,
    contactEmail:req.body.email,
    },
    season:req.body.season,
    image:req.body.image,
    
  });
  toudetails.save(function(err,res1){
    if(err) throw err;
    var tourist=touristModel.find({});
    tourist.exec(function(err,data){
      if(err) throw err;
      res.render('home',{touristsites:data})
    })
  })

  
})

// app.post('/search/',(req,res)=>{
//   var fltrname=req.body.sitename;
//   var fltrid=req.body.siteid;
//   if(fltrname!='' && fltrid!=''){
//    var touristfilter={
//     $and:[{siteName:fltrname},{siteID:fltrid}]
//    }
//   }
//   else if(fltrname=='' && fltrid!=''){
//     var touristfilter={
//       siteID:fltrid
//     }
//   }
//   else if(fltrname!='' && fltrid==''){
//     var touristfilter={
//       siteName:fltrname
//     }
//   }
  
//   var touristsearch=touristModel.find(touristfilter);
//   touristsearch.exec(function(err,data){
//     if(err) throw err;
//     res.render('index',{title:"TOURIST PLACES",tdata:data,success:""})
//   })

// })







app.get('/delete/:id',async(req, res)=>{
  var id=req.params.id;
  var del=touristModel.findByIdAndDelete(id);
  
  del.exec(function(err){
    if(err) throw err;
    var tourist=touristModel.find({})
    tourist.exec(function(err,data){
      if(err) throw err;
      res.render("home",{touristsites:data});
    });
  });
  
  });



app.get('/edit/:id',async(req,res)=>{
  var id=req.params.id;
  var tourist=touristModel.find({})
  var name=await touristModel.findOne({_id:id})
  var edit=touristModel.findById(id)
  edit.exec(function(err,data){
    if(err) throw err;
    res.render('edit',{title:"EDIT DATA",touristsites:data})
  })

})

app.post('/update/',async(req,res)=>{
  var update=touristModel.findByIdAndUpdate(req.body.id,{
    siteID:parseInt(req.body.sid),
    siteName:req.body.sname,
    siteType:req.body.sitetype,
    siteDescription:req.body.sdiscription,
    siteAddress:{
    country:req.body.country,
    state:req.body.state,
    city:req.body.city,
    },
    siteOpenTime:req.body.sot,
    siteCloseTime:req.body.sct,
    ticketPrice:{
    adult:parseInt(req.body.adult),
    child:parseInt(req.body.child),
    foreginer:parseInt(req.body.foreginer),
    },
    Availability:req.body.available,
    contactDetails:{
    contactNumber:req.body.phone,
    contactEmail:req.body.email,
    },
    season:req.body.season,
    image:req.body.image,
    
  })
  update.exec(function(err1,data){
    if(err1) throw err1;
    var tourist=touristModel.find({});
    tourist.exec(function(err1,data){
      if(err1) throw err1;
      res.render('home',{title:"TOURIST PLACES",touristsites:data,success:"Record updated successfully"})
    })
  })

})

app.listen(5000, () => {
  console.log(`app listening at http://localhost:${5000}`);
})
