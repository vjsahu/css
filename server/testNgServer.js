module.exports=function(app)
{
    console.log("Test Ng Server is Running")
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


    app.get('/gettype',function(req,res){
        console.log("tyttttttttttttttttt")
        db.TypeKeys.find(function(err,doc){ 
        res.json(doc);
        console.log(doc)
        })
        });

        


        app.get('/getAnyType:type',function(req,res){
            var allType = req.params.type;

            if(allType=="Actions"){

                db.Actions.find(function(err,doc){ 
                    res.json(doc);
                    console.log(doc)
                    })
            }

            else if(allType=="Functions"){
                db.AllFunction.find(function(err,doc){ 
                    res.json(doc);
                    console.log(doc)
                    })
            }
            else if(allType=="Assertions"){
                db.TypeKeys.find(function(err,doc){ 
                    res.json(doc);
                    console.log(doc)
                    })

            }
           
            });
    
    app.get("/getTemplatePath:action",function(req,res){
         var getAction = req.params.action;
         db.Actions.find({"actions":getAction},function(err,doc){
             if(err) return err;
             res.json(doc)
         })
    })

    app.post('/createTestpostAllActions',function(req,res){
       console.log(req.body.allActitons+"yyyyyyyyyyyyyyyyyyyyyyyyyyyy"); 
       console.log(req.body);      
    //    db.TestActions.insert(req.body,function(err,doc){
    //    res.json(doc);
    //    console.log(doc.length)
    //    });
        search(req.body);
    });
    // callMyDb();

//     function callMyDb(){
//     var obj09=
//     [{"object":"objectName","input":"inputName","testNgKey":"sendKeys"},
//     {"object":"objectName09","input":"inputName09","testNgKey":"click"}];
//     console.log(obj09[0].object);
//     console.log(obj09[1].object)

//     // db.Actions.find({"actions":"sendKeys"},function(err,doc){
//     // console.log(doc)
//     // search(obj09);
// //  })
//  }
    function search(data){
        var tempPath = "../autoScript/TestNg/Template/testngMainTemplate.java";
        console.log(tempPath);
        var completePath = path.join(__dirname, tempPath);
        console.log(completePath);
        templateExcecute(completePath,data)   
        }
        
        
        function templateExcecute(testPath,data){

        var templatePath = testPath;
        var scriptPath09 = "../uploads/opal/"+data.projectName+"/src/test/java/"+data.fileName+".java";
        var scriptPath = path.join(__dirname, scriptPath09);
        // var scriptPath = "C:/Users/Opal/Desktop/integrating/29/uploads/appium/template/"+data.fileName+".java";
        console.log(scriptPath)
        console.log("jjjjjjjjjjjj")
        lr = new LineByLineReader(templatePath);
        lr.on('error', function (err) {
        });
        var fName="fileName"
        lr.on('line', function (line) {
        if(line.includes(fName)){
        var oldLine= line;
        var changeString = "fileName";
        var NewLine= oldLine.replace(changeString,data.fileName)
        console.log(NewLine)
        fs.appendFileSync(scriptPath,"\n"+NewLine);
        }
        else if(line.includes("Start"))
        {
            data.allActitons.forEach((l)=>{
            var testNgFunctionName = "actionObject."+l.testNgKey+"(\""+l.object+","+l.input+"\");";
            fs.appendFileSync(scriptPath,"\n"+testNgFunctionName,'utf8');
            })
        }
          
        else{
    
        fs.appendFileSync(scriptPath,"\n"+line,'utf8');
        }
        
        });
        
        lr.on('end', function () {
        
        });

        }

}