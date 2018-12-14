module.exports=function(app)
{
console.log("Create Reuseable Server  Running")
var mongojs=require('mongojs');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var multer = require('multer');
var fs = require('fs');
var path=require("path");
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


app.get('/getact',function(req,res){
db.Actions.find(function(err,doc){ 
res.json(doc);
})
}) 

app.get('/getObjectName',function(req,res){
db.objectRepository.find(function(err,doc){ 
res.json(doc);
console.log(doc);
// console.log("hhhhhhhhhhhhhhhhh")
})
})


app.get('/getbrowsePath:actbrowser',function(req,res){
var nameAct=req.params.actbrowser
db.Actions.find({"actions":nameAct},function(err,doc){ 
res.json(doc);
})
})

 app.post('/methodParams',function(req,res){
     console.log(req.body);
 })

app.post('/Saveparameters',function(req,res)
{
   console.log(req.body)

db.Reusable.insert(req.body,function(err,doc)
{
res.json(doc);
});
searchReusable(req.body);
})





function searchReusable(data){
var tempPath = "../autoScript/ReusableFunction/Reusable.java";
console.log(tempPath);
var completePath = path.join(__dirname, tempPath);
console.log(completePath);
templateExcecuteReusable(data,completePath)
}




function templateExcecuteReusable(data,testPath)
{
var projectName =data.projectName;
console.log(data);
console.log(testPath);
console.log("templatepathcallllllllllllll")
console.log(data.class)
var scriptClass=data.reuseableClass;
var templatePath = testPath;
console.log(data.class);
db.projectSelection.find({"projectSelection" : projectName},function(err,doc){ 
    console.log(doc[0].projectId);
    var projectId=doc[0].projectId;
var tempPath = "../uploads/opal/"+projectName+"/src/main/java/reusablePackage/"+scriptClass+".java";
console.log(tempPath+"kkkkkkkkkkkk");
// var scriptPath = "C:/Users/Opal/Desktop/integrating/29/uploads/ReusableFunction/"+scriptClass+".java";
var scriptPath = path.join(__dirname, tempPath);
console.log(scriptPath)
lr = new LineByLineReader(templatePath);
lr.on('error', function (err) {
    console.log("errrrrrrrrrrroorrrrrrrrrr")
});
var fName="fileName"
lr.on('line', function (line) {
var inObj=data.reuseableParams;
var inobj1=inObj.split(",");
var inxpath=inobj1[0];
var ininput=inobj1[1];

if(line.includes("className")){
// fs.appendFileSync(scriptPath,"\n"+"public class "+ scriptClass+"{",'utf8');
console.log(line)
var oldLine= line;
var changeString = "className"
// var scriptClass="RESEND"
var NewLine= oldLine.replace(changeString,data.reuseableClass);
console.log(NewLine)
fs.appendFileSync(scriptPath,NewLine);

}

else if(line.includes("methodName"))
{
console.log(line)
var oldLine= line;
var changeString = "methodName"
// var scriptClass="RESEND"
var NewLine= oldLine.replace(changeString,data.reuseableMethod)

console.log(NewLine)
var NewLine= oldLine.replace(changeString,data.reuseableMethod)
var changeString1 = "Object"
var NewLine1= NewLine.replace(changeString1,inxpath)
var changeString2 = "input"
var NewLine2= NewLine1.replace(changeString2,ininput)
console.log(NewLine2)
fs.appendFileSync(scriptPath,NewLine2);
}
else if(line.includes("Start"))
        {
            data.modalData.forEach((l)=>{
            var testNgFunctionName = "actionObject."+l.testNgKey+"(\""+l.object+","+l.input+"\");";
            console.log(testNgFunctionName)
            fs.appendFileSync(scriptPath,"\n"+testNgFunctionName,'utf8');
            })
        }
else{
fs.appendFileSync(scriptPath,"\n"+line,'utf8');
}

});

lr.on('end', function () {

db.Function.insert({"className":data.reuseableClass,"MethodName":data.reuseableMethod,"ProjectName":projectName,"projectId":projectId})

});

});
}////////////templateExcecuteReusable///////////
app.get('/getExcelFile',function(req,res)
{ 
    const Filehound = require('filehound');
    Filehound.create()
    .ext('xlsx')
    .paths("./excel")
    .find((err, file) => {
    var excelFile=[];
    console.log(file)
    if (err) return console.error("handle err", err);
    file.forEach((n,i)=>{
    excelFile.push(path.basename(n,'.xlsx'))
    var p = path.basename(n);
    console.log(excelFile)
    console.log(i)
    if(file.length-1==i){
    res.json(excelFile)
    }
    })
    })
}) 


function search(){
    const Filehound = require('filehound');
    Filehound.create()
    .ext('xlsx')
    .paths("./excel")
    .find((err, file) => {
    // res.json(file)
    var excelFile=[];
    console.log(file)
    if (err) return console.error("handle err", err);
    file.forEach((n,i)=>{
    excelFile.push(path.basename(n,'.xlsx'))
    var p = path.basename(n);
    console.log(excelFile)
    console.log(i)
    if(file.length-1==i){
        console.log(excelFile)
        // res.json(excelFile)
    }
    })
    })
    }
    // search();


 
}
