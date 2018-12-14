module.exports=function(app)
{
  var mongojs=require('mongojs');
  var bodyParser = require("body-parser");
  var mongoose  = require('mongoose');
  var multer = require('multer');
  var db=mongojs('collections',['loginDetails','projectSelection','mobileApps'])

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  console.log("mobile_lab_server Running");
  var Promise = require('bluebird')
  var adb = require('adbkit')
  var client = adb.createClient()
  app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
  })
  //////////////////////////////////////////
  var storage = multer.diskStorage({

    filename: function (req, file, cb) {
    cb(null, file.originalname);
    },
    destination: function (req, file, cb) {
    var newDestination = __dirname+'/appFolder/'
      cb(null, newDestination);
      }
    });

  var upload = multer(
    { 
        dest: "appFolder/",
        limits: {
            fieldNameSize: 100,
            fileSize: 60000000
        },
        storage: storage
        });

  app.post("/shivaa", upload.any(),function(req, res) {
    res.send(req.files);
});


  client.trackDevices()
  .then(function(tracker) {
  tracker.on('add', function(device) {
  console.log('Device %s was plugged in', device.id)
  })
  tracker.on('remove', function(device) {
  console.log('Device %s was unplugged', device.id);
  db.Devices.remove({"DevicesId":device.id},{function(err,doc){
  console.log(doc);
  }})
  })
  tracker.on('end', function() {
  console.log('Tracking stopped')
  })
  })
  .catch(function(err) {
  console.error('Something went wrong:', err.stack)
  })//client.trackDevices()

  app.get('/mobileAppsDetails',function(req,res){
  db.Devices.find({},function(err,doc){
  if(doc.length !== 0)
  {
    res.json(doc);
    // runBatchFile();
  }
  })
  })

  function runBatchFile(){
  console.log("batch fileeeeeeeeeeee")
  require('child_process').exec("C:/Users/Opal/Desktop/finalreleasevicky/batchFiles/scrcpy.bat", function (err, stdout, stderr) {
  
    if (err) 
    {
    return console.log(err);
    }
    });
  
  }
  
  app.get('/checkBlockedDevice:blockeDtails',function(req,res){
    var blockDevice=req.params.blockeDtails;
    var blockDevice=blockDevice.split(',')
    var DevicesId=blockDevice[0];
    var CurrentTime=blockDevice[1];
    var ToTime=blockDevice[2];
    var checkDate = blockDevice[3];
    db.blockDevices.aggregate(
      {$match:{
        "DeviceId":DevicesId,
        "Date": new Date(checkDate)
        // $and:[
        // {$or:[
        //    {"FromTime":{$lte:CurrentTime}}, 
        //    {"ToTime":{$gte:ToTime}}]},
        //    {$or:[
        //    {"FromTime": { $exists: true,$eq:CurrentTime}},
        //    {"ToTime":   { $exists: true,$eq:ToTime}}
        //    ]}
        //    ]
           }
           }
        ,function(err,doc){
          console.log(doc)
          console.log(doc.length)
          res.json(doc)    
       })
  })
  app.post('/blockDevice:devicedata',function(req,res){
    console.log("yashwanthhhhhhhhhhhhhhhhhhhhhhhhh")
    var blockData = req.params.devicedata;
    console.log(blockData+"bodyyyyyyyyyyyyyyyyyyyyyyy");
    var blockData=blockData.split(',')
    var DevicesId=blockData[0];
    var convertedDate = new Date(blockData[1]);
    var CurrentTime=blockData[2];
    var ToTime=blockData[3];
    var UserId=blockData[4];
    var UserName=blockData[5];
    db.blockDevices.insert({"DeviceId":DevicesId,"Date":convertedDate,"FromTime":CurrentTime,"ToTime":ToTime,"UserId":UserId,"UserName":UserName},function(err,doc){
    console.log(doc);
    if(doc.length !=0){
      res.json(doc);""
    }
   
    })
    });
    
    app.get('/getTimeCalendar',function(req,res){
      console.log("callllllllllll")
      db.timeCalendar.find({},function(err,doc){
        res.json(doc)
        console.log(doc)
      })
    })

  app.post('/postDevicesName',function(req,res)
  {
      listDevices();
  })

  function listDevices()
  {

    client.listDevices()
    .then(function(devices) {
    return Promise.map(devices, function(device) {
    return client.shell(device.id, 'getprop ro.product.model')
    .then(adb.util.readAll)
    .then(function(output) {
    var devicesname=output.toString().trim()
    console.log(devicesname+" "+"hurry i got devices name");
    return insert(device.id,devicesname)
    console.log(devices)
    })
    })
    })
    .then(function() {
    console.log('Details of all connected devices')
    })
    .catch(function(err) {
    console.error('Something went wrong:', err.stack)
    }) 

  }//function listDevices()

  function insert(devicesid,devicesname)
  {
    db.Devices.findAndModify({
      query: {"DevicesId":devicesid},
      update: {$setOnInsert: {"DevicesName":devicesname}},
      new: true,
      upsert: true},
      function(error,doc){
    console.log(doc)
    });
  }

app.get('/unBlockApi:myparam',function(req,res){
  var paramsDetails=req.params.myparam;
  var arr = paramsDetails.split(',');
  var UserId=arr[0];
  var currentTime = arr[1];
  var todayDate=arr[2];
  console.log(UserId+"UserId");
  console.log(currentTime+"currentTime");
  console.log(todayDate+"todayDate");
  db.blockDevices.aggregate(
    {$match:{
      // "DeviceId":"A97I2V17GA231989",
      "Date": new Date(todayDate),
       "UserId":UserId,
      // $and:[
      //    {"FromTime":{$lte:currentTime}},
      //    {"ToTime":  {$gt:currentTime}}
      //    ]
         }},function(err,doc){
           res.json(doc)
  })
})
app.get('/multipleDevUnblock:multipleParam',function(req,res){
  var multipleparamsDetails=req.params.multipleParam;
  var arr = multipleparamsDetails.split(',');
  var deviceId=arr[0];
  var currentTime = arr[1];
  var UserId=arr[2];

  db.blockDevices.aggregate([
    {"$match":{
     "UserId":UserId,
    $and:[
       {"FromTime":{$lte:currentTime}},
       {"ToTime":  {$gt:currentTime}}
       ]
       }},
       {"$lookup": 
       {
       "from": "Devices",
      "localField":"DeviceId",
       "foreignField":"DevicesId",
       "as": "result"
       }},
        { $unwind: "$result" },

       
   ],function(err,doc){
     console.log(doc)
     res.json(doc)
   })


////////////////////////////////////////////////////////////
  // var multipleparamsDetails=req.params.multipleParam;
  // var arr = multipleparamsDetails.split(',');
  // var deviceId=arr[0];
  // var currentTime = arr[1];
  // var UserId=arr[2];
  // db.blockDevices.aggregate(
  //   {$match:{
  //     "DeviceId":deviceId,
  //      "UserId":UserId,
  //     $and:[
  //        {"FromTime":{$lte:currentTime}},
  //        {"ToTime":  {$gt:currentTime}}
  //        ]
  //        }},function(err,doc){
  //          res.json(doc)
  // })
})
    app.post('/installapk',function(req,res){
      var devicesId = req.body.deviceId;
      var apkpath = req.body.apkPath;
      console.log(devicesId+"devicesId")
      console.log(apkpath+"newapknewapk")
      client.install(devicesId, apkpath)
      .then(function() {
      console.log('Installed %s on all connected devices', apkpath)
      res.json(devicesId)
      })
      .catch(function(err) {
      console.error('Something went wrong:', err.stack)
    })
    
    })//installapk
function increment(){
 var booked = ["A","B","C","D"];
  console.log(booked.slice(booked.length-1,booked.length));
}
increment();

 function dbcall(){

  db.blockDevices.aggregate([
    {"$match":{
     "UserId":"U01",
    $and:[
       {"FromTime":{$lte:"11:00"}},
       {"ToTime":  {$gt:"11:00"}}
       ]
       }},
       {"$lookup": 
       {
       "from": "Devices",
      "localField":"DeviceId",
       "foreignField":"DevicesId",
       "as": "result"
       }},
        { $unwind: "$result" },

       
   ],function(err,doc){
     console.log(doc)
     res.json(doc)
   })

 }


}//module exports