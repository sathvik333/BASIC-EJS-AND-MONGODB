
var mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/EntryWay',{useNewUrlParser:true});
var conn=mongoose.connection;
var touristschema= new mongoose.Schema({
    siteID:Number,
    siteName:String,
    siteType:String,
    siteDescription:String,
    siteAddress:String,
    siteOpenTime:String,
    siteCloseTime:String,
    ticketPrice:Number,
    Availability:String,
    contactNumber:String,
    contactEmail:String,
    
    
});
var touristModel=mongoose.model('touristsites',touristschema);
module.exports=touristModel;
//  <div>
// <ul style="color:rgb(54, 232, 10); float:inline-start;">
//     <button class="button"><a href="/input">ADMIN</a>
// </ul>
// </div>
//  <div class="row row-cols-4 g-3">
// <%if (web.length>0){ %>
//   <% web.forEach(function(row){%>
//   <div class="col">
//       <div class="card">
//           <img src="" alt="<%=row.sitename %>" />
//           <div class="card-body">
//               <p class="card-text"><%=row.siteName%></p>
//               <p class="card-text"><%=row.siteDescription%></p>
//               <p class="card-text"><%=row.country%></p>
//               <p class="card-text"><%=row.state%></p>
//               <p class="card-text"><%=row.city%></p>
//               <p class="card-text"><%=row.siteOpenTime%></p>
//               <p class="card-text"><%=row.siteCloseTime%></p>
//               <p class="card-text"><%=row.adult%></p>
//               <p class="card-text"><%=row.child%></p>
//               <p class="card-text"><%=row.foreginer%></p>
//               <p class="card-text"><%=row.weather%></p>

//           </div>
//       </div>
//   </div>
// <% })} %>
// </div> -->
// var addCols = function (num){
//     for (var i=1;i<=num;i++) {
//         var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
//         var myPanel = $('<div class="card card-outline-info" id="'+i+'Panel"><div class="card-block"><div class="card-title"><span>Card #'+i+'</span><button type="button" class="close" data-target="#'+i+'Panel" data-dismiss="alert"><span class="float-right"><i class="fa fa-remove"></i></span></button></div><p>Some text in '+i+' </p><img src="//placehold.it/50/eeeeee" class="rounded rounded-circle"></div></div>');
//         myPanel.appendTo(myCol);
//         myCol.appendTo('#contentPanel');
//     }
    
    
//     $('.close').on('click', function(e){
//       e.stopPropagation();  
//           var $target = $(this).parents('.col-sm-3');
//           $target.hide('slow', function(){ $target.remove(); });
//     });
// };

// $(document).ready(function(){
//     addCols('5');
//     return false;
// });

// $( "#btnGen" ).click(function() {
//   addCols('1');
//   return false;
// });

// <% for(var i=0; i<touristsites.length; i++) {%>
//     <%if(tdata.length>0){%>
//         <% tdata.forEach(function(row){%>
       
//         <div class="card;" style="padding:20px;">
//             <div class="card-body">
//                 <img src="<%= touristsites[i].image %>" class="card-img-top" alt="Image Not found" width="300px" height="300px">
//                 <h4 class="card-title" style="color:black;">
//                     <th scope="row">
//                         <%= touristsites[i].siteName %>
//                     </th>
//                 </h4>
//                 <h4 class="card-title" style="color:black;">
//                     <!-- <th scope="row">
//                         <%= touristsites[i].siteAddress%>
//                     </th> -->
//                     <th scope="row">
//                         <%= touristsites[i].siteAddress.state %>
//                     </th>
//                     <th scope="row">
//                         <b>Rs:</b>
//                         <%= touristsites[i].ticketPrice.adult %>
//                     </th>
//                 </h4>
//                 <a href=" <%= touristsites[i].siteId%>"><button type="button" class="btn btn-danger"
//                     style="text-decoration:white;">KNOW MORE</button></a>
//                 <a class="btn btn-outline-danger" href="/delete/ <%= touristsites[i]._id %>" ><i class="bi bi-trash3-fill"></i></a>
//                 <td><a class="btn btn-outline-danger" href="/edit/<%= touristsites[i]._id %>"><i class="fa fa-edit"></i></a>
//             </div>
//         </div>
//   <% })} %>
// </div>
// </div>
