module.exports=function(app)
{
  var mongojs=require('mongojs');
  var bodyParser = require("body-parser");
//   var mongoose  = require('mongoose');
//   var multer = require('multer');
  var fs = require('fs');
  var path = require("path");
  var LineByLineReader = require('line-by-line');
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
  });

  ////////////////////////Appium////////////////////////////
  app.get('/getact',function(req,res){
    db.Actions.find(function(err,doc){ 
    res.json(doc);
    })
    });
    
    app.get("/getTemplatePath:action",function(req,res){
         var getAction = req.params.action;
         db.Actions.find({"actions":getAction},function(err,doc){
             if(err) return err;
             res.json(doc)
         })
    })

    app.post('/postAllActions',function(req,res){
       console.log(req.body);
       console.log(req.body.allActitons[0].value);
       console.log(req.body.Date)      
       db.TestActions.insert(req.body,function(err,doc){
       res.json(doc);
       console.log(doc.length)
       });
        // search(req.body.fileName,req.body);
    });

    function search(fileName,data){
        var tempPath = data.allActitons[0].templatePath;
        var completePath = path.join(__dirname, tempPath);
        templateExcecute(fileName,data,completePath)
        // listDevices(filename,data,completePath) 
        }

function listDevices(fileName,data,testPath)
{

  client.listDevices()
  .then(function(devices) {
  return Promise.map(devices, function(device) {
  return client.shell(device.id, 'getprop ro.product.model')
  .then(adb.util.readAll)
  .then(function(output) {
  var devicesname=output.toString().trim()
  console.log(testPath)
    // templateExcecute(fileName,data,testPath)
//   templateExcecute(testPath,fileName,data,device.id,devicesname)
  })
  })
  })
  .then(function() {
  console.log('Details of all connected devices')
  })
  .catch(function(err) {
  console.error('Something went wrong:', err.stack)
  }) 

}

function templateExcecute(scriptClass,data,testPath){
    var templatePath = testPath;
    var scriptPath = "C:/Users/Opal/Desktop/integrating/29/uploads/appium/src/test/java/com/appium/"+scriptClass+".java";
    lr = new LineByLineReader(templatePath);
    lr.on('error', function (err) {
    });
    
    lr.on('line', function (line) {
        var a = "Chrome4";
        if(line.includes( a)){
            fs.appendFileSync(scriptPath,"\n"+scriptClass,'utf8');
            // fs.appendFileSync(scriptPath,"\n"+"public class "+scriptClass+" {",'utf8');
        }
        // else if(line.includes("Chrome4")){
            // fs.appendFileSync(scriptPath,"\n"+"driver.get(\""+data.allActitons[0].value+"\");",'utf8');
        
        // }
        else{
            fs.appendFileSync(scriptPath,"\n"+line,'utf8');
        }
        
    });
    
    lr.on('end', function () {
        
    });
    }

// function templateExcecute(testPath,scriptClass,data,deviceId,devicesName){
// var templatePath = testPath;
// var scriptPath = "C:/Users/Opal/Desktop/integrating/29/uploads/appium/src/test/java/com/appium/"+scriptClass+".java";
// console.log(scriptPath)
// lr = new LineByLineReader(templatePath);
// lr.on('error', function (err) {
// });

// lr.on('line', function (line) {
//     if(line.includes("Chrome1")){
//         fs.appendFileSync(scriptPath,"\n"+"public class "+scriptClass+" {",'utf8');
//     }
//     else if(line.includes("Chrome2")){
//         fs.appendFileSync(scriptPath,"\n"+"caps.setCapability(MobileCapabilityType.DEVICE_NAME,\""+devicesName+"\");",'utf8');
    
//     }
//     else if(line.includes("Chrome3")){
//         fs.appendFileSync(scriptPath,"\n"+"caps.setCapability(MobileCapabilityType.DEVICE_NAME,\""+deviceId+"\");",'utf8');
    
//     }
//     else if(line.includes("Chrome4")){
//         fs.appendFileSync(scriptPath,"\n"+"driver.get(\""+data.allActitons[0].value+"\");",'utf8');
    
//     }
//     else{
//         fs.appendFileSync(scriptPath,"\n"+line,'utf8');
//     }
    
// });

// lr.on('end', function () {
    
// });
// }


}