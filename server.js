
const express=require('express');
const app=express();
const path=require('path');
var mongo = require('mongodb');
const bodyParser=require('body-parser');
var rimraf = require('rimraf');
//const crypto=require('crypto')//give file name
const multer=require('multer')
const GridFsStorage=require('multer-gridfs-storage')
const gridfs=require('gridfs-stream')
var mongojs=require('mongojs');
var mongoose  = require('mongoose');
var fs = require('fs');
const fse = require('fs-extra')
const exec = require('child_process')
const JSON = require('circular-json');
const Filehound=require('filehound');

//////////////////tetslink/////////////////
var TestlinkConnect = require("testlink-connect"); 
var key= "9021ab8eb0a3d5b4547768a8a0f152e0";
// var key = "b32aa71981df54ccaf4006367b608368";
var url = "http://localhost/testlink/lib/api/xmlrpc/v1/xmlrpc.php";
var tc = new TestlinkConnect(key,url);
tc.getTestLinkVersion(function(callback){ 
console.log(callback); 
});
console.log (tc.getUrl());
///////////////////////////////////////////
// var hostedGitInfo = require("hosted-git-info")
// var info = hostedGitInfo.fromUrl("https://github.com/TeamPlatform/finalCode0310.git","./uploads")
//console.log(info)
//var mongoStore = require('connect-mongo')(session);

var methodOverride = require('method-override');
var bson = require('bson');
var Promise = require('es6-promise').Promise;
//var Decimal128 = require('mongodb').Decimal128;
app.use(bodyParser.json({limit: '50mb'})); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({limit: '50mb', extended: true,parameterLimit:50000}));// parse application/x-www-form-urlencoded

app.use(bodyParser.json());
//const api=require('./server/routes/api')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});



app.use(express.static(path.join(__dirname,'dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


var db=mongojs('collections',['asd'])
console.log(db)

//for folders
mongoose.connect('mongodb://localhost:27017/collections')
mongoose.Promise = global.Promise;

gridfs.mongo = mongoose.mongo;
/*
  Check MongoDB connection
*/
var connection = mongoose.connection;
// const upload = multer({
//   dest: './uploads/' // this saves your file into a directory called "uploads"
// }); 
  //var gfs = gridfs(connection.db);
var shell = require("shelljs");



// Mongo URI
const mongoURI = 'mongodb://localhost:27017/collections';

// Create mongo connection
const conn = mongoose.createConnection(mongoURI);

// Init gfs
var gfs;






conn.once('open', () => {
  // Init stream
  gfs = gridfs(conn.db, mongoose.mongo);
 
   gfs.collection('folder');
//   gfs.files.find().toArray(function (err, files) {
 
//     console.log(files.length)
//     console.log(files)
// })  

});


app.get('/searchDir:sD',function(req,res){
//console.log("sdddddddDir")
// var sDir=req.params.sD;
// //console.log(sDir)
// var searchPath=__dirname+"/uploads/"+sDir
// if(!fs.existsSync(searchPath)){
// res.json("Please Wait Files Are Synchronizing")

// }


})
app.get('/createFolder:data',function(req,res){
//console.log("uiiiiiiiiiiiiiii"+req.params.data)
// var projectName=req.params.data;
// var projectPath=__dirname+"/uploads/"+projectName
// var onlyOnce=1
// if( onlyOnce===1 && !fs.existsSync(projectPath) ){
// onlyOnce++
// var trialCall = function() {
// //console.log("aaaaaaaaaaaaaaauiiiiiiiiiiiiiii")
// // var lengthCount =2910;
// gfs.files.find({contentType:projectName}).toArray(function (err, files) {


// let lengthCheck = files.length -1 ; 
// var totalfiles=files.length

// let i = 0;

// let m =0;
// var trialcall1 = function(m){
// if(m=== lengthCheck){

// }else{


// //console.log("juuuuuuuuueee")
// shell.mkdir('-p',"./"+files[m].metadata)


// const stream = gfs.createReadStream(files[m].filename);

// var seam = fs.createWriteStream(__dirname+"/"+files[m].metadata+"/"+files[m].filename);


// stream.pipe(seam);
// m++;
// if(m==lengthCheck){
// seam.on('finish', function(){
// //console.log("ffffffffffffffff")
// res.json("Synchronized Done");
// });
// }

// console.log(m+" no loop "+" "+totalfiles) 

// //console.log(m+" exectutr loop "+" "+files[m].filename) 
// trialcall1(m)

// }
// } 
// trialcall1(0)



// })

// // resolve(fileInfo);

// // });
// // }//)
// // })//gfs
// // }) 

// }
// // console.log("iam project"+ projectName[0]);
// trialCall();

// } 
// else{

// res.json("Already Folder Exits");
// }
//res.json("Please Wait File Is Synchronizing");

})





//var Git = require("nodegit");
// console.log(__dirname+"/uploads")
// console.log("./uploads")
//var pp=__dirname+"/uploads"
 //console.log("cccccccccccccccccccccccc")
// Clone a given repository into the `./tmp` folder.
// Git.Clone("https://github.com/TeamPlatform/finalCode0310.git", pp)
// .then(function() {
//   console.log("uuuuuuppppppppppppppppppppp")
//     // Use a known commit sha from this repository.
//     //return repo.getCommit("59b20b8d5c6ff8d09518454d4dd8b7b30f095ab5");
//   })
// var clone = require('git-clone');
// clone("https://github.com/TeamPlatform/finalCode0310.git",pp)
  // Look up a specific file within that commit.
  // .then(function(commit) {
  //   return commit.getEntry("README.md");
  // })
  // // Get the blob contents from the file.
  // .then(function(entry) {
  //   // Patch the blob to contain a reference to the entry.
  //   return entry.getBlob().then(function(blob) {
  //     blob.entry = entry;
  //     return blob;
  //   });
  // })
  // // Display information about the blob.
  // .then(function(blob) {
  //   // Show the path, sha, and filesize in bytes.
  //   console.log(blob.entry.path() + blob.entry.sha() + blob.rawsize() + "b");

  //   // Show a spacer.
  //   console.log(Array(72).join("=") + "\n\n");

  //   // Show the entire file.
  //   console.log(String(blob));
  // })
  //.catch(function(err) { console.log(err); });

















// gfs = gridfs(conn.db, mongoose.mongo);
// gfs.collection('folder');
 
//Create storage engine
const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      //crypto.randomBytes(16, (err, buf) => {
 
        var path = req.params.a;
        var latestPath =   path.replace(/[-]/gi, '/');
       
        let data_Array = latestPath.split("/");
     
        var latestPath123 = data_Array.splice(data_Array.length-1);
 var myJSON = JSON.stringify(latestPath123);
           
             latestPath = latestPath.substring(0, latestPath.length - myJSON.length+3); // "12345.0"
     
      
       // var newDestination = 'uploads/' + latestPath;




        // if (err) {
        //   return reject(err);
        // }
        
        const filename = file.originalname;
       

        const fileInfo = {
            metadata:'uploads/'+latestPath,
          filename:filename,
          contentType :data_Array[0],
          bucketName: 'folder'
        };
        resolve(fileInfo);
    //  });
    });
  }
});
const upload = multer({ storage });

// <<<<<<< HEAD

// var incOnce=1;
// if(incOnce===1){
//   db.countInc.insert({ "projectID" : "pID",
//     "moduleID" : "mID",
//     "featureID" : "fID",
//     "scriptID" : "sID",
//     "fCount" : 1,
//     "pCount" : 1,
//     "mCount" : 1,
//     "sCount" : 1})

//   incOnce++
// }




// var dir = __dirname+/uploads/;

// fs.readdir(dir, function(err, files){
//   //console.log(files)
//   files = files.map(function (fileName) {
//      //console.log("111"+fileName)
//     return {

//       name: fileName,
//        time: fs.statSync(dir + '/' + fileName).mtime
        

//     };
//   })
//    .sort(function (a, b) {
  

//     return a.time - b.time; })
//   .map(function (v) {
  
//     var minCheck=(((new Date()-v.time)/1000)/60)
//     var finalDir=dir+v.name
//     console.log(minCheck)
//     console.log(finalDir)
//     if (minCheck<10){
//      console.log("dddddddddd") 
// rimraf(finalDir, function () { console.log('done'); }); 
//     }


//   });
// }); 
//console.log(__dirname)
//var destination="./uploads/AgilityTests-master/endToEndTests/node_modules/.bin/cypress"



app.post('/gitClone',function(req,res)
{

console.log("hgh"+req.body.gitClone)

//if(1==1){


const Filehound = require('filehound');
Filehound.create()
 
.ext('bat')
.match('gitClone.bat')
.path("./batchFiles")
.find((err,htmlFiles)=>
{
//console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhh")
//console.log(htmlFiles)
var gitPath = ".\\"+htmlFiles;
console.log(gitPath+"oppwwwwwwwwwww");

 var stream = fs.createWriteStream(gitPath);

stream.write("@echo off\n")
stream.write("cd "+"./uploads  &&"+" git clone "+req.body.gitClone )

console.log(gitPath+"yyyyyyyyyyyyyy")
require('child_process').exec(gitPath, (err, stdout, stderr) => 
{
if (err) throw err;
//console.log(stdout, stderr); 
 console.log("fdgljfHAgDCHJASLGFLH")
//res.json({"result":"Git Clone Is Succesffully Imported"})  
res.json("Git Clone Is Succesffully Imported") 
}); 





})
// }
// else{
//  res.json() 
// }
 
})


app.post('/npmInstall',function(req,res)
{
db.countInc.find({},function(err,doc){
proID=doc[0].projectID
pCount=doc[0].pCount
mCount=doc[0].mCount
fCount=doc[0].fCount
sCount=doc[0].sCount
smId=doc[0].moduleID
sfID=doc[0].featureID
ssID=doc[0].scriptID

//console.log(pCount+"uiiiii"+mCount+"jj"+fCount+"pp"+sCount)

})
//db.projectSelection.insert({"projectSelection":"test","projectId":"pID10"})
//console.log("hgh"+req.body.npmPath)
var finalcypressProjectName=""
var cypressProjectName=req.body.npmPath.split('\\')
//console.log(cypressProjectName+"cccccccccccccc")
finalcypressProjectName=cypressProjectName[0]


const Filehound = require('filehound');
Filehound.create()

.ext('bat')
.match('npmInstall.bat')
.path("./batchFiles")
.find((err,htmlFiles)=>
{
//console.log(htmlFiles)
var npmPath = ".\\"+htmlFiles;
console.log(npmPath+"oppwwwwwwwwwww");
var stream = fs.createWriteStream(npmPath);
stream.write("@echo off\n")
stream.write("cd "+"./uploads/"+req.body.npmPath+" && npm install" )



require('child_process').exec(npmPath, (err, stdout, stderr) => 
{
if (err) throw err;
console.log(stdout, stderr);
pCount++
pID=proID+pCount

db.projectSelection.insert({"projectSelection":finalcypressProjectName,"projectId":pID,"framework":"Cypress"})


console.log("jhjhjhjhjjjjjjjjj")
res.json("Npm Completed") 
console.log("tttttt")
deleteCypressFile(req.body.npmPath,finalcypressProjectName,pID,mCount,fCount,sCount, smId, sfID, ssID)


}); 



})




})



var deleteCypressFile=function(npmPath,finalcypressProjectName,pID,mCount,fCount,sCount, smId, sfID, ssID){
var CypJson="./uploads/"+npmPath+"/cypress.json"
var deleteCypressFolder="./uploads/"+npmPath+"/cypress"
var destination="./uploads/"+npmPath+"/node_modules/.bin/cypress"


var copyCypressJson="./uploads/"+npmPath+"/node_modules/.bin/cypress.json"


fs.unlink(destination,function(err){
if(err) return console.log(err);
//console.log("wwwwwww"+npmPath)

console.log(finalcypressProjectName+"ggggggggggggg")
copyCypressFolder(npmPath,destination,finalcypressProjectName,deleteCypressFolder,CypJson,copyCypressJson,pID,mCount,fCount,sCount, smId, sfID, ssID)
console.log('file deleted successfully');

});
}


var copyCypressFolder=function(copySourcePath,cypressFolderPath,finalcypressProjectName,deleteCypressFolder,CypJson,copyCypressJson,pID,mCount,fCount,sCount, smId, sfID, ssID){
// db.countInc.find({},function(err,doc){
// proID=doc[0].projectID
// pCount=doc[0].pCount
// mCount=doc[0].mCount
// fCount=doc[0].fCount
// sCount=doc[0].sCount
// smId=doc[0].moduleID
// sfID=doc[0].featureID
// ssID=doc[0].scriptID

// console.log(pCount+"uiiiii"+mCount+"jj"+fCount+"pp"+sCount)

// })

var ncp = require('ncp').ncp;

ncp.limit = 16;
var source="./uploads/"+copySourcePath+"/cypress"
//var CypJson="./uploads/"+copySourcePath+"/cypress.json"

fs.mkdir(cypressFolderPath,function(err){
//console.log("wwwwuryrtrhrhrhhhh")

ncp(source, cypressFolderPath, function (err) {
if (err) {
return console.error(err);
}
fs.copyFile(CypJson,copyCypressJson , (err) => {
if (err) throw err;
//console.log('source.txt was copied to destination.txt');
console.log(deleteCypressFolder+"deleteeeee")
//fs.createReadStream(CypJson).pipe(fs.createWriteStream(cypressFolderPath));
//fs.unlink(CypJson)
rimraf(deleteCypressFolder, function () { console.log('done'); }); 
//fs.unlink(deleteCypressFolder)
});



cypressDbCreation(cypressFolderPath,pID,mCount,fCount,sCount, smId, sfID, ssID,finalcypressProjectName)

console.log('done!');



});
})


}



//var eceLast=0

var cypressDbCreation= function(cypressFolderPath,pID,mCount,fCount,sCount, smId, sfID, ssID,finalcypressProjectName){
var insertModuleName = []
var cypressArrayFilesCheck=[]
var cypressProjectName=cypressFolderPath.split("/")
console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqtrrrrrrrrrrrrrrrrrrrrrrrrr")
//console.log(cypressFolderPath)
// pCount++
// pID=proID+pCount

// db.projectSelection.insert({"projectSelection":finalcypressProjectName,"projectId":pID,"framework":"Cypress"})
// //console.log("call ssssssss")

var cypressModuleName=[]
//var cypressArrayFilesCheck=[]
const searchFilehound = require('filehound');
searchFilehound.create()
.ext('js')
.paths(cypressFolderPath)
.find((err, htmlFiles) => {

//console.log(htmlFiles)
htmlFiles.forEach(function(file,index) {
//console.log(index)
// htmlFiles.length--
// console.log(htmlFiles.length)
var LineReader = require('line-by-line');
lR = new LineReader(file)

lR.on('error', function (err) {
console.log("eeeeeeee") 
});

lR.on('line', function (line) {


if(line.includes(" it('") === true){


if(cypressArrayFilesCheck.includes(file)===false){

//console.log(htmlFiles.length-cypressArrayFilesCheck.length)

cypressArrayFilesCheck.push(file)
//console.log(path.dirname(cypressArrayFilesCheck[cypressArrayFilesCheck.length-1]).length)

path.basename(cypressArrayFilesCheck[cypressArrayFilesCheck.length-1])
//console.log(path.basename(cypressArrayFilesCheck[cypressArrayFilesCheck.length-1]))
//console.log(path.dirname(cypressArrayFilesCheck[cypressArrayFilesCheck.length-1]))
var cypressModule=path.dirname(cypressArrayFilesCheck[cypressArrayFilesCheck.length-1]).split('\\').pop()

//var featureName=path.basename(cypressArrayFilesCheck[cypressArrayFilesCheck.length-1],'.js')





//db.featureName.insert({"featureName":featureName,"featureId":fID,"projectId":pID}) 




if(cypressModuleName.includes(cypressModule)===false){
//console.log("33333333")
//console.log(mCount+"bbbbbbbbbbbb")

mCount++ 

//console.log(mCount+"uuuuubbbbbbbbbbbb"+cypressModule)
//console.log(fCount+"aaa")

mId=smId+mCount
//insertModuleName = 
insertModuleName.push({"moduleName":cypressModule,"moduleId":mId,"projectId":pID})
//console.log(insertModuleName)
// db.moduleName.insert({"moduleName":cypressModule,"moduleId":mId,"projectId":pID})
cypressModuleName.push(path.dirname(cypressArrayFilesCheck[cypressArrayFilesCheck.length-1]).split('\\').pop())
//console.log(testNgModuleName) 
// fCount++

}




}
// else{
// eceLast++
// }
//cypressScriptsCreation(cypressArrayFilesCheck[cypressArrayFilesCheck.length-1],fID,mId,pID,ssID,sCount)
}



})

lR.on('end', function () {

if(index === htmlFiles.length -1){
//console.log(index+" iam done ")
//console.log(insertModuleName)

insertModuleName.forEach((obj,index) =>{
console.log(insertModuleName)
//db.moduleName.insert(obj)

db.moduleName.insert(obj ,function(err,doc)
{
//res.json(doc);
//console.log("wweeeeeeeeee")
console.log(doc)


// console.log(index+" iam done ")
if(index === insertModuleName.length -1){
console.log(index+" iam done ")
setTimeout(function() {
cypressFeatureNameDbs(pID,cypressArrayFilesCheck,fCount) 
},5000)

}

});

})
// var obj=JSON.parse(insertModuleName)


//console.log(insertModuleName.length) 

}

});



})//end


})


}//end of testng functio
  var cypressFeatureNameDbs=function(pID,cypressArrayFilesCheck,fCount){
   //console.log(typeof(cypressArrayFilesCheck.length)+"llll")
  //console.log(path.basename(cypressArrayFilesCheck[i],'.js'))
  var dd=""
  //console.log("hhhhpppppppp"+pID)
  db.moduleName.find({"projectId":pID},function(err,doc){
  console.log(doc.length+"tyyyy")
    
  cypressArrayFilesCheck.forEach(function(cypressFile) {
  
  doc.forEach(function(docFile) {
    //console.log(docFile.moduleName+"PPPPPP")
    //console.log(path.dirname(cypressFile).split('\\').pop()+"           "+docFile.moduleName)
       if(path.dirname(cypressFile).split('\\').pop()===docFile.moduleName){
   // console.log(path.dirname(cypressFile).split('\\').pop()+"1111"+docFile.moduleName)
    ///console.log(docFile.moduleName)
    //console.log(fCount)
      fCount++
  
   fID=sfID+fCount
   //dd=docFile.moduleId
   db.featureName.insert({"featureName":path.basename(cypressFile,'.js'),"featureId":fID,"moduleId":docFile.moduleId,"projectId":docFile.projectId})
  cypressScriptsCreation(cypressFile,pID,docFile.moduleId,fID,cypressArrayFilesCheck)
  }
  
  })
   
  
  })
  
  
  // console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq"+doc.length)
  
  //    for(var j=0;j<cypressArrayFilesCheck.length;j++){
  //     for(var i=0;i<doc.length;i++){
  //   console.log(doc[i].moduleName+"mmmmmmmmmmmmmmmm")
     
  // console.log(path.dirname(cypressArrayFilesCheck[j]).split('\\').pop())
  //       if(path.dirname(cypressArrayFilesCheck[j]).split('\\').pop()==doc[i].moduleName){
  //     fCount++
  // console.log(doc[i].moduleName+"ffffffff")
  //  fID=sfID+fCount
  //  dd=doc[i].moduleId
  //  db.featureName.insert({"featureName":path.basename(cypressArrayFilesCheck[j],'.js'),"featureId":fID,"moduleId":doc[i].moduleId,"projectId":doc[i].projectId})
  // }
  //  }
  
  
  
  //  cypressScriptsCreation(cypressArrayFilesCheck[j],pID,dd,fID,cypressArrayFilesCheck)
  
  // }
   })
  
  }
  
  
  
  
  
  
  
  
  
  var cypressLength=1;
  
  //var sCount=1
  var cypressScriptsCreation=function(cypressFolderPath,pID,dd,fID,cypressArrayFilesCheck){
   // for(var c=0;c<=cypressArrayFilesCheck.length-1;c++) {
  var scriptLineInc=0
   
  //console.log("000000000000000000000000"+pID)
    
    var Line = require('line-by-line');
   lScript = new Line(cypressFolderPath)
   
     lScript .on('error', function (err) {
      console.log("eeeeeeee")  
      });
      
      lScript.on('line', function (line) {
        //console.log(sCount+"rrrrrrr")
         
           
          if(line.includes(" it('") == true){
           // console.log("wswwwwwwwww")
       
            sCount++ 
            //console.log(sCount+"wswwwwwwwww")
  
    sID=ssID+sCount
  
     scriptLineInc++
      var scriptLinePath=line.split(",")
  var onlyScriptPath=scriptLinePath[0].split("it(")
  var finalCypressScript=onlyScriptPath[1].replace("'","").replace("'","")
      
  db.testScript.insert({"scriptName":finalCypressScript,"featureId":fID,"moduleId":dd,"scriptId":sID,"lineNum":scriptLineInc,"projectId":pID})
  //.log(res[2])
  
  //}
  // }
  // }
  // })
  
  }
  else{
     scriptLineInc++
  }
  //}
  //}
  })
   // }
  
     lScript.on('end', function () {
        
    console.log(cypressLength+"jjjjjjj")
  console.log(cypressArrayFilesCheck.length)
          if(cypressLength===cypressArrayFilesCheck.length){
            console.log("eendddddd2222222222222222222222")
            cypressLength=0;
            // filesLength=0;
            cypressArrayFilesCheck=[]
           cypressFolderPath=[]
           console.log(fID)
              var fFCount=fID.split("fID")
              var finalfCount=parseInt(fFCount[1])
            
             //console.log("uuuuuu"+fCount) 
              var fMCount=dd.split("mID")
               var finalmCount=parseInt(fMCount[1])
              var fPCount=pID.split("pID")
               var finalpCount=parseInt(fPCount[1])
               //console.log(sID)
              var fSCount=sID.split("sID")
               var finalsCount=parseInt(fSCount[1])
   
  // setTimeout(function() {
        db.countInc.update({"projectID":"pID"},{$set:{ "fCount":finalfCount,"sCount":finalsCount,
      "pCount":finalpCount,"mCount":finalmCount}})
      // },10000)
      //console.log("  end end  Scenario  true "+finalfCount+"L"+finalsCount+"L"+finalpCount+"L"+finalmCount)      
     }
  cypressLength++
  
    
      });
  
  
  
  
   }
  
app.get('/selectionProject',function(req,res){
  db.projectSelection.find({},function(err,doc){
  res.json(doc);
  console.log(doc) ;
  })
  })
  
  // app.post('/postDevicesName',function(req,res)
  // {
  // db.mobileApps.insert(req.body,function(err,doc)
  // {
  // res.json(doc);
  // console.log(doc)
  // });
  
  
  // })
  
  app.get('/getDataModule:p',function(req,res){ 
  console.log("moduleeeeeeerrrrrrrrrrrrrtttttttttttttttttttttttttttt")
  var data = req.params.p;
  console.log(data)
  db.projectSelection.find({"projectSelection":data},function(err,doc){ 
    db.moduleName.find({"projectId":doc[0].projectId},function(err,doc){
  res.json(doc);
  console.log(doc)
  })
})
  
})
  
  
  app.get('/getModuleData:pp',function(req,res){
  console.log("getttttttttttttttttt");


  var data = req.params.pp;
 //var data="Agility-Cypress-Tests-master\\endToEndTests"
  console.log(data);
  
  db.projectSelection.find({"projectSelection":data},function(err,doc){
  console.log(doc)
  //console.log(doc[0].projectId)
  db.moduleName.find({"projectId":doc[0].projectId},function(err,doc){ 
  res.json(doc);
  // console.log(doc)
  })
  
  //res.json(doc);
  
  })
  
  
  
  
  
  // db.moduleName.find({},function(err,doc){ 
  // res.json(doc);
  // console.log(doc)
  // })
  // db.moduleName.find({}).sort({_id:-1}).limit(1,function(err,doc)
  // {
  // res.json(doc);
  // //console.log(doc);
  // })
  })
  

 
  // app.get('/projectIds:p',function(req,res){
  // console.log("pppppppppppprrrrrrrrrrrrrrooooooooooo");
  // var data = req.params.p;
  // console.log(data+"kkkkk");
  
  // db.projectSelection.find({"projectSelection":data},function(err,doc){
  
  // //console.log(doc[0].projectId)
  // db.moduleName.find({"projectId":doc[0].projectId},function(err,doc){ 
  // res.json(doc);
  // console.log(doc)
  // })
  
  // //res.json(doc);
  
  // })
  
  // })
  
  
  // db.projectSelection.find({"projectSelection":"Projectjava"},function(err,doc){
  
  // //console.log(doc[0].projectId)
  // db.moduleName.find({"projectId":doc[0].projectId},function(err,doc){ 
  // //res.json(doc);
  // console.log(doc)
  // })
  
  // //res.json(doc);
  
  // })
  
   app.get('/gs:dd',function(req,res){
  console.log("ttooooooooooo");
 
  var ee=req.params.dd
console.log(ee)
  db.featureName.find({"moduleId":ee},function(err,doc){
  console.log(doc)
  res.json(doc)
  })
})
  
app.get('/searchModule:moduleData',function(req,res){
  console.log("ttooooooooooo");
 
  var moduleData=req.params.moduleData

 console.log(moduleData)
  var data_Array = moduleData.split(",");
  
  var projectFolder = data_Array[0];
 var moduleId = data_Array[1];

 db.projectSelection.find({"projectSelection":projectFolder},function(err,doc){
  if (moduleId=="All"){
  db.featureName.find({"projectId":doc[0].projectId},function(err,doc){
  console.log(doc)
  res.json(doc)
  })

}
else{
  //console.log("kkkkkkkkkkkkkkkkkkklooooooooooo"+doc[0].projectId)
  db.featureName.find({"moduleId":moduleId,"projectId":doc[0].projectId},function(err,doc){
  console.log(doc)
  res.json(doc)
  })

}
})
})

/////////////////////////////////
app.get('/getTestScriptDetails:ss',function(req,res)
  {
  console.log("jjjjjjjjjjjjjrrrrrrrrrrrrrrrrrr") 
  
  var data = req.params.ss;
  //console.log(data)
  var data_Array = data.split(",");
  //var projectId = data_Array[0];
  //projectId= parseInt(projectId)
  
  var moduleId = data_Array[0];
  //moduleId= parseInt(moduleId)
  
  var featureId = data_Array[1]; 
  //featureId= parseInt(featureId)
  
  var projectSelection = data_Array[2]; 
   var type = data_Array[3];
    var priority = data_Array[4];
    //console.log(typeof(type)+"oo"+priority)
    var count = 0;
  if (moduleId=="All" && featureId=="All" && type=="All"&& priority=="All") {

console.log("get All Data")
  db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
  //db.moduleName.find({"projectId":projectDetails[0].projectId},function(err,moduleDetails){
  //db.featureName.find({"projectId":moduleDetails[0].projectId},function(err,featureDetails){
  // 
  
  db.testScript.find({"projectId":projectDetails[0].projectId

},function(err,testScriptDetails)
  {
//console.log(testScriptDetails)

  var newArray = [];
 
     if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
  testScriptDetails.forEach(function(testScriptDetail) {
  //console.log(testScriptDetail.featureId+"featureNNNNNNN")
db.featureName.find({"featureId":testScriptDetail.featureId,"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,featureDetails){
//console.log("1111111111")
  //console.log(featureDetails[0].featureName)

 

db.moduleName.find({"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,moduleDetails){
 
obj={}
 obj['moduleName']=moduleDetails[0].moduleName;
//})

 obj['featureName']=featureDetails[0].featureName;
  
  //obj['featureName']= featureDetails[0].featureName;
  obj['lineNum']= testScriptDetail.lineNum;
  obj['scriptName']=testScriptDetail.scriptName;
  obj['projectSelection']=projectDetails[0].projectSelection;
  obj['time']=testScriptDetail.time;
  // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
//console.log(testScriptDetail.typeId)

if(testScriptDetail.typeId=="t01"){
    //console.log(typeData[0].typeName)
  obj['type']="Positive"
  } 
  else if(testScriptDetail.typeId=="t02"){
 obj['type']="Negative"
  }

  if(testScriptDetail.priorityId=="p02"){
    //console.log(typeData[0].typeName)
  obj['priority']="P2"
  } 
  else if(testScriptDetail.priorityId=="p03"){
    //console.log(typeData[0].typeName)
  obj['priority']="P3"
  } 
   else if(testScriptDetail.priorityId=="p01"){
    //console.log(typeData[0].typeName)
  obj['priority']="P1"
  } 
   else if(testScriptDetail.priorityId=="p04"){
    //console.log(typeData[0].typeName)
  obj['priority']="P4"
  } 

  console.log(obj)

  newArray.push(obj)
  //console.log(newArray)
  //console.log(testScriptDetails.length-1)

  
  //console.log(count)
  if(count === ( testScriptDetails.length - 1)){
  //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
  res.json(newArray);

  }
  count++;
  // }
  
  }); 

  // }
  // } 
  // }
})
  })
  }) 
  //})
 // })
})//moduleCllend
 
 
  
}//if end  
if (moduleId!="All" && featureId=="All" && type=="All"&& priority=="All") {

console.log("get only moduleId")
  db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
  
  
  // 
  
  db.testScript.find({"projectId":projectDetails[0].projectId,"moduleId":moduleId

},function(err,testScriptDetails)
  {

  var newArray = [];
     if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
  testScriptDetails.forEach(function(testScriptDetail) {
 db.moduleName.find({"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId},function(err,moduleDetails){
 db.featureName.find({"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId,"featureId":testScriptDetail.featureId},function(err,featureDetails){
 
 obj = {}
  obj['moduleName']= moduleDetails[0].moduleName;
  obj['featureName']= featureDetails[0].featureName;
  obj['lineNum']= testScriptDetail.lineNum;
  obj['scriptName']=testScriptDetail.scriptName;
  obj['projectSelection']=projectDetails[0].projectSelection;
  obj['time']=testScriptDetail.time;
  // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
//console.log(testScriptDetail.typeId)

if(testScriptDetail.typeId=="t01"){
    //console.log(typeData[0].typeName)
  obj['type']="Positive"
  } 
  else if(testScriptDetail.typeId=="t02"){
 obj['type']="Negative"
  }

  if(testScriptDetail.priorityId=="p02"){
    //console.log(typeData[0].typeName)
  obj['priority']="P2"
  } 
  else if(testScriptDetail.priorityId=="p03"){
    //console.log(typeData[0].typeName)
  obj['priority']="P3"
  } 
   else if(testScriptDetail.priorityId=="p01"){
    //console.log(typeData[0].typeName)
  obj['priority']="P1"
  } 
   else if(testScriptDetail.priorityId=="p04"){
    //console.log(typeData[0].typeName)
  obj['priority']="P4"
  } 

  console.log(obj)

  newArray.push(obj)
  //console.log(newArray)
  //console.log(testScriptDetails.length-1)

  
  //console.log(count)
  if(count === ( testScriptDetails.length - 1)){
  //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
  res.json(newArray);

  }
  count++;
  // }
  
  }); 
 
  // }
  // } 
  // }
  
  }) 
  })
  })
  })//moduleCllend
 
 
  
}//if end  
if (moduleId=="All" && featureId=="All" && type=="All"&& priority!="All") {

console.log("get only priority")
  db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
  //db.moduleName.find({"projectId":projectDetails[0].projectId},function(err,moduleDetails){
 // db.featureName.find({"projectId":projectDetails[0].projectId},function(err,featureDetails){
  // 
  
  db.testScript.find({"projectId":projectDetails[0].projectId,"priorityId":priority

},function(err,testScriptDetails)
  {

  var newArray = [];
     if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
  testScriptDetails.forEach(function(testScriptDetail) {
    db.featureName.find({"featureId":testScriptDetail.featureId,"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,featureDetails){


db.moduleName.find({"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,moduleDetails){
 

 obj = {}
  obj['moduleName']= moduleDetails[0].moduleName;
  obj['featureName']= featureDetails[0].featureName;
  obj['lineNum']= testScriptDetail.lineNum;
  obj['scriptName']=testScriptDetail.scriptName;
  obj['projectSelection']=projectDetails[0].projectSelection;
  obj['time']=testScriptDetail.time;
  // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
//console.log(testScriptDetail.typeId)

if(testScriptDetail.typeId=="t01"){
    //console.log(typeData[0].typeName)
  obj['type']="Positive"
  } 
  else if(testScriptDetail.typeId=="t02"){
 obj['type']="Negative"
  }

  if(testScriptDetail.priorityId=="p02"){
    //console.log(typeData[0].typeName)
  obj['priority']="P2"
  } 
  else if(testScriptDetail.priorityId=="p03"){
    //console.log(typeData[0].typeName)
  obj['priority']="P3"
  } 
   else if(testScriptDetail.priorityId=="p01"){
    //console.log(typeData[0].typeName)
  obj['priority']="P1"
  } 
   else if(testScriptDetail.priorityId=="p04"){
    //console.log(typeData[0].typeName)
  obj['priority']="P4"
  } 

  console.log(obj)

  newArray.push(obj)
  //console.log(newArray)
  //console.log(testScriptDetails.length-1)

  
  //console.log(count)
  if(count === ( testScriptDetails.length - 1)){
  //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
  res.json(newArray);

  }
  count++;
  // }
  
  }); 
 
  // }
  // } 
  // }
  
  }) 
  })
  })
  })//moduleCllend
 
 
  
}//if end  
if (moduleId=="All" && featureId=="All" && type!="All"&& priority=="All") {

console.log("get only type")
  db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
  // db.moduleName.find({"projectId":projectDetails[0].projectId},function(err,moduleDetails){
  // db.featureName.find({"projectId":projectDetails[0].projectId},function(err,featureDetails){
  // // 
  
  db.testScript.find({"projectId":projectDetails[0].projectId,"typeId":type

},function(err,testScriptDetails)
  {

console.log(testScriptDetails.length+"engthhhhhhhh")
  var newArray = [];
      if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
 
  testScriptDetails.forEach(function(testScriptDetail) {
    db.featureName.find({"featureId":testScriptDetail.featureId,"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,featureDetails){


db.moduleName.find({"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,moduleDetails){
 
//console.log("testScriptDetail.typeIdjjjjjjjjjj")
 obj = {}
  obj['moduleName']= moduleDetails[0].moduleName;
  obj['featureName']= featureDetails[0].featureName;
  obj['lineNum']= testScriptDetail.lineNum;
  obj['scriptName']=testScriptDetail.scriptName;
  obj['projectSelection']=projectDetails[0].projectSelection;
  obj['time']=testScriptDetail.time;
  // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){


if(testScriptDetail.typeId=="t01"){
    //console.log(typeData[0].typeName)
  obj['type']="Positive"
  } 
  else if(testScriptDetail.typeId=="t02"){
 obj['type']="Negative"
  }

  if(testScriptDetail.priorityId=="p02"){
    //console.log(typeData[0].typeName)
  obj['priority']="P2"
  } 
  else if(testScriptDetail.priorityId=="p03"){
    //console.log(typeData[0].typeName)
  obj['priority']="P3"
  } 
   else if(testScriptDetail.priorityId=="p01"){
    //console.log(typeData[0].typeName)
  obj['priority']="P1"
  } 
   else if(testScriptDetail.priorityId=="p04"){
    //console.log(typeData[0].typeName)
  obj['priority']="P4"
  } 

  //console.log(obj)

  newArray.push(obj)
  //console.log(newArray)
  //console.log(testScriptDetails.length-1)

  
  //console.log(count)
  if(count === ( testScriptDetails.length - 1)){
  //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
  res.json(newArray);

  }
  count++;
  // }
  
  }); 
//      if(testScriptDetails.length==0){
//       console.log("rerrrrrrrrrrreeeeeee")
//  res.json(newArray); 
// }
  // }
  // } 
  // }
  
  }) 
  })
  })
  })//moduleCllend
 
 
  
}//if end  

if (moduleId=="All" && featureId!="All" && type=="All"&& priority=="All") {

  console.log("get only feature")
    db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
 
    
    db.testScript.find({"projectId":projectDetails[0].projectId,"featureId":featureId
  
  },function(err,testScriptDetails)
    {
  
    var newArray = [];
       if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
    testScriptDetails.forEach(function(testScriptDetail) {
         db.moduleName.find({"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,moduleDetails){
    db.featureName.find({"featureId":testScriptDetail.featureId,"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,featureDetails){

   obj = {}
    obj['moduleName']= moduleDetails[0].moduleName;
    obj['featureName']= featureDetails[0].featureName;
    obj['lineNum']= testScriptDetail.lineNum;
    obj['scriptName']=testScriptDetail.scriptName;
    obj['projectSelection']=projectDetails[0].projectSelection;
    obj['time']=testScriptDetail.time;
    // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
  //console.log(testScriptDetail.typeId)
  
  if(testScriptDetail.typeId=="t01"){
      //console.log(typeData[0].typeName)
    obj['type']="Positive"
    } 
    else if(testScriptDetail.typeId=="t02"){
   obj['type']="Negative"
    }
  
    if(testScriptDetail.priorityId=="p02"){
      //console.log(typeData[0].typeName)
    obj['priority']="P2"
    } 
    else if(testScriptDetail.priorityId=="p03"){
      //console.log(typeData[0].typeName)
    obj['priority']="P3"
    } 
     else if(testScriptDetail.priorityId=="p01"){
      //console.log(typeData[0].typeName)
    obj['priority']="P1"
    } 
     else if(testScriptDetail.priorityId=="p04"){
      //console.log(typeData[0].typeName)
    obj['priority']="P4"
    } 
  
    console.log(obj)
  
    newArray.push(obj)
    //console.log(newArray)
    //console.log(testScriptDetails.length-1)
  
    
    //console.log(count)
    if(count === ( testScriptDetails.length - 1)){
    //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
    res.json(newArray);
  
    }
    count++;
    // }
    
    }); 
  //      if(testScriptDetails.length==0){
  //  res.json(newArray); 
  // }
    // }
    // } 
    // }
    
    }) 
    })
    })
    })//moduleCllend
   
   
    
  }//if end  
  if (moduleId=="All" && featureId=="All" && type!="All"&& priority!="All") {
  
  console.log("get type and priority")
    db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
   // db.moduleName.find({"projectId":projectDetails[0].projectId},function(err,moduleDetails){
   // db.featureName.find({"projectId":projectDetails[0].projectId},function(err,featureDetails){
    // 
    
    db.testScript.find({"projectId":projectDetails[0].projectId,"typeId":type,"priorityId":priority
  
  },function(err,testScriptDetails)
    {
  
    var newArray = [];
       if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
    testScriptDetails.forEach(function(testScriptDetail) {
    db.featureName.find({"featureId":testScriptDetail.featureId,"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,featureDetails){


db.moduleName.find({"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,moduleDetails){
 
  
   obj = {}
    obj['moduleName']= moduleDetails[0].moduleName;
    obj['featureName']= featureDetails[0].featureName;
    obj['lineNum']= testScriptDetail.lineNum;
    obj['scriptName']=testScriptDetail.scriptName;
    obj['projectSelection']=projectDetails[0].projectSelection;
    obj['time']=testScriptDetail.time;
    // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
  //console.log(testScriptDetail.typeId)
  
  if(testScriptDetail.typeId=="t01"){
      //console.log(typeData[0].typeName)
    obj['type']="Positive"
    } 
    else if(testScriptDetail.typeId=="t02"){
   obj['type']="Negative"
    }
  
    if(testScriptDetail.priorityId=="p02"){
      //console.log(typeData[0].typeName)
    obj['priority']="P2"
    } 
    else if(testScriptDetail.priorityId=="p03"){
      //console.log(typeData[0].typeName)
    obj['priority']="P3"
    } 
     else if(testScriptDetail.priorityId=="p01"){
      //console.log(typeData[0].typeName)
    obj['priority']="P1"
    } 
     else if(testScriptDetail.priorityId=="p04"){
      //console.log(typeData[0].typeName)
    obj['priority']="P4"
    } 
  
    console.log(obj)
  
    newArray.push(obj)
    //console.log(newArray)
    //console.log(testScriptDetails.length-1)
  
    
    //console.log(count)
    if(count === ( testScriptDetails.length - 1)){
    //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
    res.json(newArray);
  
    }
    count++;
    // }
    
    }); 

    // }
    // } 
    // }
    
    }) 
    })
    })
    })//moduleCllend
   
   
    
  }//if end  
  else if(moduleId!="All" && featureId!="All" && type=="All" && priority!="All"){
  
  console.log("get All type"+featureId)
   db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
  
    console.log(projectDetails[0].projectId)
  
    
    db.testScript.find({"projectId":projectDetails[0].projectId,"featureId":featureId,"moduleId":moduleId,"priorityId":priority
   // ,"typeId":type,"priorityId":priority
  },function(err,testScriptDetails)
    {
 
    var newArray = [];
        if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}

    testScriptDetails.forEach(function(testScriptDetail) {
        db.moduleName.find({"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId},function(err,moduleDetails){
    
    db.featureName.find({"featureId":testScriptDetail.featureId,"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId},function(err,featureDetails){

   // console.log(testScriptDetail);
  obj = {}
    obj['moduleName']= moduleDetails[0].moduleName;
    obj['featureName']= featureDetails[0].featureName;
    obj['lineNum']= testScriptDetail.lineNum;
    obj['scriptName']=testScriptDetail.scriptName;
    obj['projectSelection']=projectDetails[0].projectSelection;
    obj['time']=testScriptDetail.time;
    // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
  //console.log(testScriptDetail.typeId)
  
  if(testScriptDetail.typeId=="t01"){
      //console.log(typeData[0].typeName)
    obj['type']="Positive"
    } 
    else if(testScriptDetail.typeId=="t02"){
   obj['type']="Negative"
    }
  
    if(testScriptDetail.priorityId=="p02"){
      //console.log(typeData[0].typeName)
    obj['priority']="P2"
    } 
    else if(testScriptDetail.priorityId=="p03"){
      //console.log(typeData[0].typeName)
    obj['priority']="P3"
    } 
     else if(testScriptDetail.priorityId=="p01"){
      //console.log(typeData[0].typeName)
    obj['priority']="P1"
    } 
     else if(testScriptDetail.priorityId=="p04"){
      //console.log(typeData[0].typeName)
    obj['priority']="P4"
    } 
  
    console.log(obj)
    newArray.push(obj)
    //console.log(newArray)
    //console.log(testScriptDetails.length-1)
  
    
    //console.log(count)
    if(count === ( testScriptDetails.length - 1)){
    //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
    res.json(newArray);
  
    }
    count++;
    // }
    
    }); 
    

    
    }) 
    })
    })
    })
    
    
  }//Else if end  
  else if(moduleId!="All" && featureId!="All" && type!="All" && priority=="All"){
  
  console.log("get All priority"+featureId)
   db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
  
    console.log(projectDetails[0].projectId)
 
    
    db.testScript.find({"projectId":projectDetails[0].projectId,"featureId":featureId,"moduleId":moduleId,"typeId":type
   // ,"typeId":type,"priorityId":priority
  },function(err,testScriptDetails)
    {
 
    var newArray = [];
        if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
  testScriptDetails.forEach(function(testScriptDetail) {
       db.moduleName.find({"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId},function(err,moduleDetails){
    
    db.featureName.find({"featureId":testScriptDetail.featureId,"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId},function(err,featureDetails){
    // 
  obj = {}
    obj['moduleName']= moduleDetails[0].moduleName;
    obj['featureName']= featureDetails[0].featureName;
    obj['lineNum']= testScriptDetail.lineNum;
    obj['scriptName']=testScriptDetail.scriptName;
    obj['projectSelection']=projectDetails[0].projectSelection;
    obj['time']=testScriptDetail.time;
    // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
  //console.log(testScriptDetail.typeId)
  
  if(testScriptDetail.typeId=="t01"){
      //console.log(typeData[0].typeName)
    obj['type']="Positive"
    } 
    else if(testScriptDetail.typeId=="t02"){
   obj['type']="Negative"
    }
  
    if(testScriptDetail.priorityId=="p02"){
      //console.log(typeData[0].typeName)
    obj['priority']="P2"
    } 
    else if(testScriptDetail.priorityId=="p03"){
      //console.log(typeData[0].typeName)
    obj['priority']="P3"
    } 
     else if(testScriptDetail.priorityId=="p01"){
      //console.log(typeData[0].typeName)
    obj['priority']="P1"
    } 
     else if(testScriptDetail.priorityId=="p04"){
      //console.log(typeData[0].typeName)
    obj['priority']="P4"
    } 
  
    console.log(obj)
    newArray.push(obj)
    //console.log(newArray)
    //console.log(testScriptDetails.length-1)
  
    
    //console.log(count)
    if(count === ( testScriptDetails.length - 1)){
    //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
    res.json(newArray);
  
    }
    count++;
    // }
    
    }); 
    
  
    
    }) 
    })
    })
    })
    
    
  }//Else if end 
  else if(moduleId=="All" && featureId!="All" && type!="All" && priority=="All"){
  
  console.log("get only featureId && type"+featureId)
   db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
  
    console.log(projectDetails[0].projectId)
 
    
    db.testScript.find({"projectId":projectDetails[0].projectId,"featureId":featureId,"typeId":type
   // ,"typeId":type,"priorityId":priority
  },function(err,testScriptDetails)
    {
  
    var newArray = [];
        if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
  testScriptDetails.forEach(function(testScriptDetail) {
   // console.log(testScriptDetail);
       db.moduleName.find({"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,moduleDetails){
    
    db.featureName.find({"featureId":testScriptDetail.featureId,"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,featureDetails){
    // 
   obj = {}
    obj['moduleName']= moduleDetails[0].moduleName;
    obj['featureName']= featureDetails[0].featureName;
    obj['lineNum']= testScriptDetail.lineNum;
    obj['scriptName']=testScriptDetail.scriptName;
    obj['projectSelection']=projectDetails[0].projectSelection;
    obj['time']=testScriptDetail.time;
    // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
  //console.log(testScriptDetail.typeId)
  
  if(testScriptDetail.typeId=="t01"){
      //console.log(typeData[0].typeName)
    obj['type']="Positive"
    } 
    else if(testScriptDetail.typeId=="t02"){
   obj['type']="Negative"
    }
  
    if(testScriptDetail.priorityId=="p02"){
      //console.log(typeData[0].typeName)
    obj['priority']="P2"
    } 
    else if(testScriptDetail.priorityId=="p03"){
      //console.log(typeData[0].typeName)
    obj['priority']="P3"
    } 
     else if(testScriptDetail.priorityId=="p01"){
      //console.log(typeData[0].typeName)
    obj['priority']="P1"
    } 
     else if(testScriptDetail.priorityId=="p04"){
      //console.log(typeData[0].typeName)
    obj['priority']="P4"
    } 
  
    console.log(obj)
    newArray.push(obj)
    //console.log(newArray)
    //console.log(testScriptDetails.length-1)
  
    
    //console.log(count)
    if(count === ( testScriptDetails.length - 1)){
    //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
    res.json(newArray);
  
    }
    count++;
    // }
    
    }); 
    
   
  
    }) 
    })
    })
    })
    
    
  }//Else if end 

  else if(moduleId!="All" && featureId=="All" && type=="All" && priority!="All"){

    console.log("get only moduleId && priority"+featureId)
     db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
    
      console.log(projectDetails[0].projectId+"gggg"+moduleId+"gggg"+priority)

      
      db.testScript.find({"projectId":projectDetails[0].projectId,"moduleId":moduleId,"priorityId":priority
     // ,"typeId":type,"priorityId":priority
    },function(err,testScriptDetails)
      {
  //console.log(testScriptDetails.length)
      var newArray = [];
          if(testScriptDetails.length==0){
    console.log("777777777777rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
   testScriptDetails.forEach(function(testScriptDetail) {
  
    //console.log(testScriptDetail);
         db.moduleName.find({"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId},function(err,moduleDetails){
      
      db.featureName.find({"featureId":testScriptDetail.featureId,"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,featureDetails){
      // 
       //console.log("222222222222222222222222222222")    
    obj = {}
      obj['moduleName']= moduleDetails[0].moduleName;
      obj['featureName']= featureDetails[0].featureName;
      obj['lineNum']= testScriptDetail.lineNum;
      obj['scriptName']=testScriptDetail.scriptName;
      obj['projectSelection']=projectDetails[0].projectSelection;
      obj['time']=testScriptDetail.time;
      // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
    //console.log(testScriptDetail.typeId)
    
    if(testScriptDetail.typeId=="t01"){
        //console.log(typeData[0].typeName)
      obj['type']="Positive"
      } 
      else if(testScriptDetail.typeId=="t02"){
     obj['type']="Negative"
      }
    
      if(testScriptDetail.priorityId=="p02"){
        //console.log(typeData[0].typeName)
      obj['priority']="P2"
      } 
      else if(testScriptDetail.priorityId=="p03"){
        //console.log(typeData[0].typeName)
      obj['priority']="P3"
      } 
       else if(testScriptDetail.priorityId=="p01"){
        //console.log(typeData[0].typeName)
      obj['priority']="P1"
      } 
       else if(testScriptDetail.priorityId=="p04"){
        //console.log(typeData[0].typeName)
      obj['priority']="P4"
      } 
    
    ///console.log(obj)
    
      newArray.push(obj) 
      //console.log(count)
      if(count === ( testScriptDetails.length - 1)){
  console.log(newArray)
      res.json(newArray);
    
      }
      count++;
      // }
      
      }); 
      
  
      
      }) 
      })
      })
      })
      
      
    }//Else if end 
    else if(moduleId=="All" && featureId!="All" && type=="All" && priority!="All"){
    
    console.log("get only featureId && priority"+featureId)
     db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
    
      console.log(projectDetails[0].projectId)
 
      
      db.testScript.find({"projectId":projectDetails[0].projectId,"featureId":featureId,"priorityId":priority
     // ,"typeId":type,"priorityId":priority
    },function(err,testScriptDetails)
      {
 
      var newArray = [];
          if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
   testScriptDetails.forEach(function(testScriptDetail) {
     // console.log(testScriptDetail);
         db.moduleName.find({"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,moduleDetails){
      
      db.featureName.find({"featureId":testScriptDetail.featureId,"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,featureDetails){
      //   
      obj = {}
      obj['moduleName']= moduleDetails[0].moduleName;
      obj['featureName']= featureDetails[0].featureName;
      obj['lineNum']= testScriptDetail.lineNum;
      obj['scriptName']=testScriptDetail.scriptName;
      obj['projectSelection']=projectDetails[0].projectSelection;
      obj['time']=testScriptDetail.time;
      // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
    //console.log(testScriptDetail.typeId)
    
    if(testScriptDetail.typeId=="t01"){
        //console.log(typeData[0].typeName)
      obj['type']="Positive"
      } 
      else if(testScriptDetail.typeId=="t02"){
     obj['type']="Negative"
      }
    
      if(testScriptDetail.priorityId=="p02"){
        //console.log(typeData[0].typeName)
      obj['priority']="P2"
      } 
      else if(testScriptDetail.priorityId=="p03"){
        //console.log(typeData[0].typeName)
      obj['priority']="P3"
      } 
       else if(testScriptDetail.priorityId=="p01"){
        //console.log(typeData[0].typeName)
      obj['priority']="P1"
      } 
       else if(testScriptDetail.priorityId=="p04"){
        //console.log(typeData[0].typeName)
      obj['priority']="P4"
      } 
    
      console.log(obj)
      newArray.push(obj)
      //console.log(newArray)
      //console.log(testScriptDetails.length-1)
    
      
      //console.log(count)
      if(count === ( testScriptDetails.length - 1)){
      //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
      res.json(newArray);
    
      }
      count++;
      // }
      
      }); 
 
      
      }) 
      })
      })
      })
      
      
    }//Else if end 
    else if(moduleId!="All" && featureId=="All" && type!="All" && priority=="All"){
    
    console.log("get only moduleId && type"+featureId)
     db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
    
      console.log(projectDetails[0].projectId)
     
      
     
      // 
      
      db.testScript.find({"projectId":projectDetails[0].projectId,"moduleId":moduleId,"typeId":type
     // ,"typeId":type,"priorityId":priority
    },function(err,testScriptDetails)
      {
   
      var newArray = [];
          if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}

   testScriptDetails.forEach(function(testScriptDetail) {
     // console.log(testScriptDetail);
  db.moduleName.find({"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId,},function(err,moduleDetails){

  db.featureName.find({"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId,"featureId":testScriptDetail.featureId},function(err,featureDetails){     
     console.log(featureDetails[0].featureName+"feattttttt")

      obj = {}
      obj['moduleName']= moduleDetails[0].moduleName;
      obj['featureName']= featureDetails[0].featureName;
      obj['lineNum']= testScriptDetail.lineNum;
      obj['scriptName']=testScriptDetail.scriptName;
      obj['projectSelection']=projectDetails[0].projectSelection;
      obj['time']=testScriptDetail.time;
      // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
    //console.log(testScriptDetail.typeId)
    
    if(testScriptDetail.typeId=="t01"){
        //console.log(typeData[0].typeName)
      obj['type']="Positive"
      } 
      else if(testScriptDetail.typeId=="t02"){
     obj['type']="Negative"
      }
    
      if(testScriptDetail.priorityId=="p02"){
        //console.log(typeData[0].typeName)
      obj['priority']="P2"
      } 
      else if(testScriptDetail.priorityId=="p03"){
        //console.log(typeData[0].typeName)
      obj['priority']="P3"
      } 
       else if(testScriptDetail.priorityId=="p01"){
        //console.log(typeData[0].typeName)
      obj['priority']="P1"
      } 
       else if(testScriptDetail.priorityId=="p04"){
        //console.log(typeData[0].typeName)
      obj['priority']="P4"
      } 
    
      console.log(obj)
      newArray.push(obj)
      //console.log(newArray)
      //console.log(testScriptDetails.length-1)
    
      
      //console.log(count)
      if(count === ( testScriptDetails.length - 1)){
      //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
      res.json(newArray);
    
      }
      count++;
      // }
      
      }); 
      
 
      
      }) 
      })
      })
      })
      
      
    }//Else if end 
    else if(moduleId=="All" && featureId!="All" && type=="All" && priority=="All" ){
    
    console.log("get All Data Except feature"+featureId)
     db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
    
      console.log(projectDetails[0].projectId)
   
      
      db.testScript.find({"projectId":projectDetails[0].projectId,"featureId":featureId
     // ,"typeId":type,"priorityId":priority
    },function(err,testScriptDetails)
      {
     //   console.log("@@@@@@@@@@@@@@@@@@@@")
     console.log("@@@@@@@@@@@@@@@@@@@@"+testScriptDetails.length)
     //   console.log(testScriptDetails.length)
      // res.json(doc);
      //console.log(moduleDetails);
      var newArray = [];
          if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
      // for(j = 0 ;j<moduleDetails.length;j++){
      
      // for(l = 0 ;l<featureDetails.length;l++){
      // console.log(doc[i].moduleId === module[j].moduleId );
      // for(i = 0 ;i<testScriptDetails.length;i++){
      testScriptDetails.forEach(function(testScriptDetail) {
     // console.log(testScriptDetail);
        db.moduleName.find({"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,moduleDetails){
      
      db.featureName.find({"featureId":testScriptDetail.featureId,"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,featureDetails){
      //  
      obj = {}
      obj['moduleName']= moduleDetails[0].moduleName;
      obj['featureName']= featureDetails[0].featureName;
      obj['lineNum']= testScriptDetail.lineNum;
      obj['scriptName']=testScriptDetail.scriptName;
      obj['projectSelection']=projectDetails[0].projectSelection;
      obj['time']=testScriptDetail.time;
      // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
    //console.log(testScriptDetail.typeId)
    
    if(testScriptDetail.typeId=="t01"){
        //console.log(typeData[0].typeName)
      obj['type']="Positive"
      } 
      else if(testScriptDetail.typeId=="t02"){
     obj['type']="Negative"
      }
    
      if(testScriptDetail.priorityId=="p02"){
        //console.log(typeData[0].typeName)
      obj['priority']="P2"
      } 
      else if(testScriptDetail.priorityId=="p03"){
        //console.log(typeData[0].typeName)
      obj['priority']="P3"
      } 
       else if(testScriptDetail.priorityId=="p01"){
        //console.log(typeData[0].typeName)
      obj['priority']="P1"
      } 
       else if(testScriptDetail.priorityId=="p04"){
        //console.log(typeData[0].typeName)
      obj['priority']="P4"
      } 
    
      console.log(obj)
      newArray.push(obj)
      //console.log(newArray)
      //console.log(testScriptDetails.length-1)
    
      
      //console.log(count)
      if(count === ( testScriptDetails.length - 1)){
      //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
      res.json(newArray);
    
      }
      count++;
      // }
      
      }); 
      
  
      
      }) 
      })
      })
      })
      
      
    }//Else if end
    else if(moduleId!="All" && featureId!="All" && type=="All" && priority=="All" ){
    
    console.log("get module & feature"+featureId)
     db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
    
      console.log(projectDetails[0].projectId)
   
      
      db.testScript.find({"moduleId":moduleId,"projectId":projectDetails[0].projectId,"featureId":featureId
     // ,"typeId":type,"priorityId":priority
    },function(err,testScriptDetails)
      {
        console.log("@@@@@@@@@@@@@@@@@@@@"+testScriptDetails.length)
     //   console.log("@@@@@@@@@@@@@@@@@@@@")
     //   console.log(testScriptDetails.length)
      // res.json(doc);
      //console.log(moduleDetails);
      var newArray = [];
          if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
      // for(j = 0 ;j<moduleDetails.length;j++){
      
      // for(l = 0 ;l<featureDetails.length;l++){
      // console.log(doc[i].moduleId === module[j].moduleId );
      // for(i = 0 ;i<testScriptDetails.length;i++){
      testScriptDetails.forEach(function(testScriptDetail) {
     // console.log(testScriptDetail);
       db.moduleName.find({"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId},function(err,moduleDetails){
      
      db.featureName.find({"featureId":testScriptDetail.featureId,"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId},function(err,featureDetails){
      //   
      // if(testScriptDetail.moduleId === moduleDetails[j].moduleId && testScriptDetail.featureId ===featureDetails[l].featureId){
      // console.log(module[j].moduleName);
    obj = {}
      obj['moduleName']= moduleDetails[0].moduleName;
      obj['featureName']= featureDetails[0].featureName;
      obj['lineNum']= testScriptDetail.lineNum;
      obj['scriptName']=testScriptDetail.scriptName;
      obj['projectSelection']=projectDetails[0].projectSelection;
      obj['time']=testScriptDetail.time;
      // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
    //console.log(testScriptDetail.typeId)
    
    if(testScriptDetail.typeId=="t01"){
        //console.log(typeData[0].typeName)
      obj['type']="Positive"
      } 
      else if(testScriptDetail.typeId=="t02"){
     obj['type']="Negative"
      }
    
      if(testScriptDetail.priorityId=="p02"){
        //console.log(typeData[0].typeName)
      obj['priority']="P2"
      } 
      else if(testScriptDetail.priorityId=="p03"){
        //console.log(typeData[0].typeName)
      obj['priority']="P3"
      } 
       else if(testScriptDetail.priorityId=="p01"){
        //console.log(typeData[0].typeName)
      obj['priority']="P1"
      } 
       else if(testScriptDetail.priorityId=="p04"){
        //console.log(typeData[0].typeName)
      obj['priority']="P4"
      } 
    
      console.log(obj)
      newArray.push(obj)
      //console.log(newArray)
      //console.log(testScriptDetails.length-1)
    
      
      //console.log(count)
      if(count === ( testScriptDetails.length - 1)){
      //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
      res.json(newArray);
    
      }
      count++;
      // }
      
      }); 
      
  
      }) 
      })
      })
      })
      
      
    }//Else if end
    else if(moduleId=="All" && featureId!="All" && type!="All" && priority!="All"){
    
    console.log("get All Module Data")
     db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
    
      console.log(projectDetails[0].projectId)
  
      
      db.testScript.find({"projectId":projectDetails[0].projectId,"typeId":type, "priorityId" :priority ,"featureId":featureId
     // ,"typeId":type,"priorityId":priority
    },function(err,testScriptDetails)
      {
     //   console.log("@@@@@@@@@@@@@@@@@@@@")
     console.log("@@@@@@@@@@@@@@@@@@@@"+testScriptDetails.length)
     //   console.log(testScriptDetails.length)
      // res.json(doc);
      //console.log(moduleDetails);
      var newArray = [];
          if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
      // for(j = 0 ;j<moduleDetails.length;j++){
      
      // for(l = 0 ;l<featureDetails.length;l++){
      // console.log(doc[i].moduleId === module[j].moduleId );
      // for(i = 0 ;i<testScriptDetails.length;i++){
      testScriptDetails.forEach(function(testScriptDetail) {
     // console.log(testScriptDetail);
          db.moduleName.find({"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,moduleDetails){
      
      db.featureName.find({"featureId":testScriptDetail.featureId,"moduleId":testScriptDetail.moduleId,"projectId":testScriptDetail.projectId},function(err,featureDetails){
      // 
      // if(testScriptDetail.moduleId === moduleDetails[j].moduleId && testScriptDetail.featureId ===featureDetails[l].featureId){
      // console.log(module[j].moduleName);
    obj = {}
      obj['moduleName']= moduleDetails[0].moduleName;
      obj['featureName']= featureDetails[0].featureName;
      obj['lineNum']= testScriptDetail.lineNum;
      obj['scriptName']=testScriptDetail.scriptName;
      obj['projectSelection']=projectDetails[0].projectSelection;
      obj['time']=testScriptDetail.time;
      // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
    //console.log(testScriptDetail.typeId)
    
    if(testScriptDetail.typeId=="t01"){
        //console.log(typeData[0].typeName)
      obj['type']="Positive"
      } 
      else if(testScriptDetail.typeId=="t02"){
     obj['type']="Negative"
      }
    
      if(testScriptDetail.priorityId=="p02"){
        //console.log(typeData[0].typeName)
      obj['priority']="P2"
      } 
      else if(testScriptDetail.priorityId=="p03"){
        //console.log(typeData[0].typeName)
      obj['priority']="P3"
      } 
       else if(testScriptDetail.priorityId=="p01"){
        //console.log(typeData[0].typeName)
      obj['priority']="P1"
      } 
       else if(testScriptDetail.priorityId=="p04"){
        //console.log(typeData[0].typeName)
      obj['priority']="P4"
      } 
    
      console.log(obj)
      newArray.push(obj)
      //console.log(newArray)
      //console.log(testScriptDetails.length-1)
    
      
      //console.log(count)
      if(count === ( testScriptDetails.length - 1)){
      //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
      res.json(newArray);
    
      }
      count++;
      // }
      
      }); 
      
  
      
      }) 
      })
      })
      })
      
      
    }//Else if end
    
    else if(moduleId!="All" && featureId=="All" && type!="All" && priority!="All"){
    
    console.log("Get All feature ")
     db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
    
    //console.log(priority+"")
    
      db.testScript.find({"projectId":projectDetails[0].projectId,"typeId":type, "priorityId" :priority ,"moduleId":moduleId
     // ,"typeId":type,"priorityId":priority
    },function(err,testScriptDetails)
      {
       //console.log("@@@@@@@@@@@@@@@@@@@@"+testScriptDetails.length)
      //console.log(testScriptDetails)
      // res.json(doc);
      //console.log(moduleDetails);
      var newArray = [];
          if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
      // for(j = 0 ;j<moduleDetails.length;j++){
      
      // for(l = 0 ;l<featureDetails.length;l++){
      // console.log(doc[i].moduleId === module[j].moduleId );
      // for(i = 0 ;i<testScriptDetails.length;i++){
      testScriptDetails.forEach(function(testScriptDetail) {
        console.log("ooppppp")
   console.log(testScriptDetail);
    db.moduleName.find({"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId},function(err,moduleDetails){
      
      db.featureName.find({"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId,"featureId":testScriptDetail.featureId},function(err,featureDetails){
      // 
       console.log(featureDetails[0].featureName+"99999")
      // if(testScriptDetail.moduleId === moduleDetails[j].moduleId && testScriptDetail.featureId ===featureDetails[l].featureId){
      // console.log(module[j].moduleName);
    obj = {}
      obj['moduleName']= moduleDetails[0].moduleName;
      obj['featureName']= featureDetails[0].featureName;
      obj['lineNum']= testScriptDetail.lineNum;
      obj['scriptName']=testScriptDetail.scriptName;
      obj['projectSelection']=projectDetails[0].projectSelection;
      obj['time']=testScriptDetail.time;
       //obj['time']=testScriptDetail.time;
      // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
    //console.log(testScriptDetail.typeId)
    
    if(testScriptDetail.typeId=="t01"){
        //console.log(typeData[0].typeName)
      obj['type']="Positive"
      } 
      else if(testScriptDetail.typeId=="t02"){
     obj['type']="Negative"
      }
    
      if(testScriptDetail.priorityId=="p02"){
        //console.log(typeData[0].typeName)
      obj['priority']="P2"
      } 
      else if(testScriptDetail.priorityId=="p03"){
        //console.log(typeData[0].typeName)
      obj['priority']="P3"
      } 
       else if(testScriptDetail.priorityId=="p01"){
        //console.log(typeData[0].typeName)
      obj['priority']="P1"
      } 
       else if(testScriptDetail.priorityId=="p04"){
        //console.log(typeData[0].typeName)
      obj['priority']="P4"
      } 
    
     // console.log(obj)
      //obj['scriptId']=testScriptDetail.scriptId;
      //obj['projectSelection']=projectDetails[0].projectSelection;
      newArray.push(obj)
      //console.log(newArray)
      //console.log(testScriptDetails.length-1)
    
      
      //console.log(count)
      if(count === ( testScriptDetails.length - 1)){
      //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
      res.json(newArray);
    
      }
      count++;
      // }
      
      }); 
      
    
      
      }) 
      })
      })
      })
      
      
    }//else if end
    
    else if(moduleId!="All" && featureId!="All"  && priority!="All" && type!="All"){
    
    console.log("get not all data"+projectSelection)
     db.projectSelection.find({"projectSelection":projectSelection},function(err,projectDetails){
    
      console.log(projectDetails[0].projectId)
    
      console.log(projectDetails[0].projectId+","+priority+","+moduleId+","+featureId+","+type)
      db.testScript.find({"projectId":projectDetails[0].projectId, "priorityId" :priority ,"moduleId":moduleId,"featureId":featureId,"typeId":type
     // ,"typeId":type,"priorityId":priority
    },function(err,testScriptDetails)
      {
      console.log("@@@@@@@@@@@@@@@@@@@@"+testScriptDetails.length)
    
      //console.log(testScriptDetails)
      // res.json(doc);
      //console.log(moduleDetails);
      var newArray = [];
          if(testScriptDetails.length==0){
      console.log("rerrrrrrrrrrreeeeeee")
 res.json(newArray); 
}
      // for(j = 0 ;j<moduleDetails.length;j++){
      
      // for(l = 0 ;l<featureDetails.length;l++){
      // console.log(doc[i].moduleId === module[j].moduleId );
      // for(i = 0 ;i<testScriptDetails.length;i++){
      testScriptDetails.forEach(function(testScriptDetail) {
      //console.log("testScriptDetaillllllllll");
      db.moduleName.find({"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId},function(err,moduleDetails){
      
      db.featureName.find({"projectId":testScriptDetail.projectId,"moduleId":testScriptDetail.moduleId,"featureId":testScriptDetail.featureId},function(err,featureDetails){
      //   
      // if(testScriptDetail.moduleId === moduleDetails[j].moduleId && testScriptDetail.featureId ===featureDetails[l].featureId){
      // console.log(module[j].moduleName);
      obj = {}
      obj['moduleName']= moduleDetails[0].moduleName;
      obj['featureName']= featureDetails[0].featureName;
      obj['lineNum']= testScriptDetail.lineNum;
      obj['scriptName']=testScriptDetail.scriptName;
      obj['projectSelection']=projectDetails[0].projectSelection;
      obj['time']=testScriptDetail.time;
      // db.type.find({"typeId":testScriptDetail.typeId},function(err,typeData){
    //console.log(testScriptDetail.typeId)
    
    if(testScriptDetail.typeId=="t01"){
        //console.log(typeData[0].typeName)
      obj['type']="Positive"
      } 
      else if(testScriptDetail.typeId=="t02"){
     obj['type']="Negative"
      }
    
      if(testScriptDetail.priorityId=="p02"){
        //console.log(typeData[0].typeName)
      obj['priority']="P2"
      } 
      else if(testScriptDetail.priorityId=="p03"){
        //console.log(typeData[0].typeName)
      obj['priority']="P3"
      } 
       else if(testScriptDetail.priorityId=="p01"){
        //console.log(typeData[0].typeName)
      obj['priority']="P1"
      } 
       else if(testScriptDetail.priorityId=="p04"){
        //console.log(typeData[0].typeName)
      obj['priority']="P4"
      } 
    
      console.log(obj)
      //obj['projectSelection']=projectDetails[0].projectSelection;
      newArray.push(obj)
      //console.log(newArray)
      //console.log(testScriptDetails.length-1)
    
      //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
      //console.log(count)
      if(count === ( testScriptDetails.length - 1)){
    
      res.json(newArray);
    //console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
      }
    
      count++;
      // }
      
      }); 
      

      
      }) 
      })
      })
      })
      
      
    }//else if end
    
      
    
    
 })

////////////////////////////////
app.post('/testScript',function(req,res){
  //   setTimeout(function() {
  //  res.json()
  //    },30000)
 
 var totalTime = 0;
  var required=[]
  var filesPath = []
  // console.log(req.body[0].featureName[0].scriptName[0].scriptName)
    var runData = req.body ;
    var runDataLength = req.body.length ;
    console.log("   run data ")
    console.log(req.body[0].featureName[0].scriptName[0].lineNum)
   // console.log( runDataLength  +"  oout  runDataLength ")
   runData.forEach((module)=>{
       runDataLength -- ;
       //  console.log( runDataLength  +"  f runDataLength ")
    
       var featureLength = module.featureName.length ;
    module.featureName.forEach((feature) =>{
    
       //console.log("llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll")
      
        featureLength -- ;
      var scriptLength = feature.scriptName.length ;
       feature.scriptName.forEach((script,index) =>{
        totalTime = totalTime+ Number(script.time);
        console.log(totalTime )
        scriptLength --;
        if (index == 0 ) {
            // console.log(module.moduleName+"/"+feature.featureName+".js" +"            featureLength")
         //  filesPath.push(module.moduleName+"/"+feature.featureName+".js")
             filesPath.push(feature.featureName+".js")
    
        }
        //console.log(script.scriptName )
        required.push(script.scriptName)
         // console.log( scriptLength +"   scriptLength  ", featureLength,runDataLength)
        if ( runDataLength == 0 &&  featureLength == 0 && scriptLength == 0  ) {
           console.log("  iam completed  " )
           console.log(filesPath)
           skipMethod(required,filesPath)
        }
           
       })
      
    })

 })

function  skipMethod(required,filesPathData) {
  // body...
  console.log(required)
  console.log(filesPathData)
var filesPathDataLength = filesPathData.length -1;
var requiredLength = required.length -1;

filesPathData.forEach((file,index )=>{
   // file = "./"+"uploads/"+req.body[0].projectSelection+"/endToEndTests/node_modules/.bin/cypress/integration/"+file;
     
    Filehound.create()
      .ext('.js')
      .match(file) //data[0].featureName.featureName+".js"
      .path("./uploads/"+req.body[0].projectSelection)
      .find((err,htmlFiles)=>{
      
      var   file1 = ".\\"+htmlFiles[0];
          console.log(file1   +"  here is file ")
          var binFolder = file1.split("\\").reverse().join("/").split("cypress/").pop().split("/").reverse().join("\\")
         // console.log(c +"   cccc  ")//.split("cypress/").pop()
         // console.log(c.pop() )
      
    //  })

     // file = "./"+"uploads/"+req.body[0].projectSelection+"/endToEndTests/node_modules/.bin/cypress/integration/"+file;
 

var lineNumber = 1;

var LineByLineReader = require('line-by-line');
// lr = new LineByLineReader("./uploads/projectjavatriall756/Sample1/Features/abc.feature")
// lr = new LineByLineReader("uploads/projectjavatriall7564/Sample1/Features/abc.feature")
lr = new LineByLineReader(file1)
//console.log(lr)
var newCss = '';
lr.on('error', function (err) {
// 'err' contains error object
console.log(" error rr rr rr "+file)
});

lr.on('line', function (line) {
  console.log(file1+"  lineNumber   lineNumber  lineNumber       "+lineNumber++)
var conditionChek = false;
required.forEach((element,index) =>{

if(line.includes(element) == true ){
var compString = line;
console.log(" compString "+compString.split("(")[1].split(",")[0]+" "+element);
if(compString.split("(")[1].split(",")[0] == "'"+element+"'" ){ 
conditionChek = true;
newCss += line.toString().replace("it.skip", "it")+"\n";

console.log(" required ");
}else{
if(line.includes(!"it.skip")){
newCss += line.toString().replace("it", "it.skip")+"\n";
}


}
}
if( conditionChek == false && line.includes(element) == false && requiredLength == index){
// it skip
// line.split("(")[1].split(",")[0];
//console.log("sssssssssssssssssss")
// if(line.includes("cy.") == false && line.includes("it") == true && line.includes(",") == true && line.includes("it.skip") == false && line.includes("describe") == false && line.includes("function") == false ){
if(line.includes("cy.") == false && line.includes("it") == true && line.includes(",") == true && line.includes("it.skip") == false && line.includes("function") === true){
console.log("yytttttttttttt")
// console.log(line)
newCss += line.toString().replace("it", "it.skip")+"\n";
}else{
//console.log(" no no no ")
newCss += line+"\n"; 
}

}
})


});
lr.on('end', function () {
console.log(" end end Scenario true ")
fs.writeFile(file1, newCss, function(err) {
          if (err) {
          return console.log(err);
          } else {
          console.log('Updated!');
                      if (filesPathDataLength === index) {
                          //cypressBatFile(req.body,binFolder)
                          //console.log(req.body.data)
                          console.log(req.body.binFolder)
                          res.json({"data":req.body,
                          "binFolder":binFolder,
                          "status":"Setting environment",
                          "timeRequired":totalTime
                          })
                      }

          }
});
// All lines are read, file is closed now.
});

})//filehoundcloser
})//foreach close
}//skipmethod end

  
  
  })
  app.post('/testRunDirectory',function(req,res) {
      console.log(" testRunDirectory testRunDirectory ")
      console.log(req.body.data)
      console.log(req.body.binFolder)
     
 var cypressBatFile = function(data,binFolder,timeRequired)
{
  if(!fs.existsSync(binFolder+"\\reports")){
    console.log(" make dir");
    fs.mkdirSync(binFolder+"\\reports", function(err){
        if(err){
            console.log(err);
            //lineRead()
            // echo the result back
           // response.send("ERROR! Can't make the directory! \n");
        }
    });
}


if(!fs.existsSync(binFolder+"\\trial.bat")){
    console.log(" make dir");
  //  fs.writeFile(binFolder+"\\trial.bat","")
  //  fs.appendFileSync(binFolder+"\\trial.bat","");
    generateBatchFile(data,binFolder,timeRequired)
    
}else{
  console.log("  iam exists ")
  generateBatchFile(data,binFolder,timeRequired)
}
}//cypressBatFile
// console.log(req.body.data)
//console.log(req.body.binFolder)
cypressBatFile(req.body.data,req.body.binFolder,req.body.timeRequired)
function generateBatchFile(data,binFolder,timeRequired){ 
  var  newLine ='';
  var jsonFile ="10.json";
  var Path = binFolder+"\\trial.bat";
  console.log("Path     "+Path)
  
  var binPath = path.dirname(Path);
  var Path2 =binPath;
  
  console.log(binPath)
  console.log(Path2 +"path2 ")
  
  
  // console.log(Path);
  //fs.appendFileSync(
  // fs.createWriteStream(Path);
 // fs.appendFileSync(Path,"\n", 'utf8');
  newLine += "@echo off\n";
  //var stream = fs.createWriteStream(Path);
  //stream.write("@echo off\n");
   // fs.appendFileSync(Path,"@echo off\n", 'utf8');
  //fs.appendFileSync(Path,"\n", 'utf8');
  // stream.write("cd "+".\\uploads\\"+data[0].projectSelection+""+"\\node_modules\\.bin"+" && cypress run --spec cypress\\integration\\")
  var firstCheck = true;
  data.forEach((data1,i)=>{
  
  data1.featureName.forEach(( feature,j)=>{
  Filehound.create()
  .ext('.js')
  .match(feature.featureName+".js") //data[0].featureName.featureName+".js"
  .path(".\\"+binPath+"\\cypress\\integration\\")
  .find((err,htmlFiles)=>
  {
  console.log(" required "+htmlFiles[0])
  console.log(" required222 "+htmlFiles[0].split(".bin/"))
  var c = htmlFiles[0].split(".bin\\").pop()
  
  console.log(c)
  if(firstCheck === true)
  {
  firstCheck = false;
  //__dirname+"\\"+
  //var array = "C:\\Users\\user\\Desktop\\platform\\releaseint12\\uploads\\Agility-Cypress-Tests-master\\endToEndTests\\node_modules\\.bin";
  //stream.write("cd "+binPath.split(".\\").pop()+" && cypress run --spec " +htmlFiles[0].split(".bin\\").pop());
  //stream.write("cd "+array+" && cypress run --spec " +htmlFiles[0].split(".bin\\").pop());
   var c = "cd "+binPath.split(".\\").pop()+" && cypress run --spec " +htmlFiles[0].split(".bin\\").pop();
  newLine += c
   //fs.appendFileSync(Path,c, 'utf8');
  }else{
  
  console.log("better luck next time")
  //stream.write(","+htmlFiles[0].split(".bin\\").pop()); 
var c1 = ","+htmlFiles[0].split(".bin\\").pop();
newLine += c1
     //fs.appendFileSync(Path,c1, 'utf8');
  
  }
  if(i === data.length -1 && j=== data1.featureName.length -1 ){
  //stream.write(" --reporter json > reports/"+jsonFile);
  var c2 = " --reporter json > reports/"+jsonFile;
  // fs.appendFileSync(Path,c2, 'utf8')
  newLine += c2
        fs.writeFile(binFolder+"\\trial1.bat", newLine, function(err) {
          console.log(" go to child    ")
          fs.copyFileSync(binFolder+"\\trial1.bat", binFolder+"\\trial.bat");
          console.log('source.txt was copied to destination.txt');
              if (err) {
                        return console.log(err);
                        res.json({"Path":Path,
                          "jsonFile":jsonFile,
                          "binFolder":binFolder,
                          "status":"started execution....",
                          "timeRequired":timeRequired
                         })
                   }else{

                          res.json({"Path":Path,
                          "jsonFile":jsonFile,
                          "binFolder":binFolder,
                          "status":"started execution....",
                          "timeRequired":timeRequired
                         })

                   }



    })
//    fs.appendFileSync(Path,c2, 'utf8', function(err) {
//     if(err) {
//         return console.log(err);
//     }

//     console.log("The file was saved!     finished   " );
// }); 
  //finalExecution(Path,jsonFile,binFolder);
  
}
  
  })
  
  // stream.write("cd "+Path2+" && cypress run --spec cypress\\integration\\"+data[i].moduleName+"\\"+data[i].featureName[j].featureName+".js");
  
  })
  // 
  
  })
  } // generatebatch file
})//  app.post('/testRunDirectory'
 
var wait = require('wait.for');
//var express = require('express');
//var app = express();

// in  a Fiber


// app.post('/testRunFinalExecution34354',function(req,res) {
//       wait.launchFiber(handleGet, req, res); //handle in a fiber, keep node spinning
// });
//finalExecution(".\\uploads\\OPALCypressProject\\endToEndTests\\node_modules\\.bin\\trial.bat", "10.json", ".\\uploads\\OPALCypressProject\\endToEndTests\\node_modules\\.bin")


app.post('/testRunFinalExecuti9999',function(req,res) {
  console.log(" testRunFinalExecution ")
  console.log(req.body)

  //finalExecution(Path,jsonFile,binFolder);

  var finalExecution = function(Path,jsonFile,folder){
  console.log(Path)
  console.log(" final executryeriuyteriu req "+Path)
  
  var nrc = require('node-run-cmd');

//    wait.launchFiber(handleGet, req, res);
//   function handleGet(req, res){
//   res.send( wait.for(nrc.run(Path),'') );
// }
  nrc.run(Path).then(function(err) {
      console.log(' pass 2345 ',err);
  console.log(' pass 2345 ',err.length);
   console.log(' pass 2345 array',err[0]);
   res.on('finish', function(){
console.log('the response has been sent');
});
  if (err[0] != 0  ) {
    console.log(" iam inprogress the cmd ")
   // res.end()
  }else{
    console.log(" iam completed the cmd ")
   // callme();
     //res.end();
     //callme2(); 
    res.json({"jsonFile":jsonFile,
              "folder":folder,
              "status":"generating report ....",
              "timeRequired":req.body.timeRequired
              })
  }
  
  }, function(err) {
  console.log('Command failed to run with error: ', err);
 // res.end()
  });
  
  }
  finalExecution(req.body.Path,req.body.jsonFile,req.body.binFolder)
  console.log(req.body.Path,req.body.jsonFile,req.body.binFolder);
  
  })
//  function callme() {
//   // body...
//   console.log("  call me")
// }

// function callme2() {
//   // body...
//   console.log("  call me 2")
// }
//   var finalExecution = function(Path,jsonFile,folder){
//   console.log(Path)
//   console.log(" final executryeriuyteriu req "+Path)
  
//   var nrc = require('node-run-cmd');
//   nrc.run(Path).then(function(err) {
//   console.log(' pass 2345 ',err);
//   res.end({"jsonFile":jsonFile,
//   "folder":folder,
//   "status":"generating report ...."
//   })
//   }, function(err) {
//   console.log('Command failed to run with error: ', err);
//   res.end({"jsonFile":jsonFile,
//   "folder":folder,
//   "status":"generating report ...."
//   })
//   });
  
//   }

// finalExecution(".\\uploads\\OPALCypressProject\\endToEndTests\\node_modules\\.bin\\trial.bat", "10.json", ".\\uploads\\OPALCypressProject\\endToEndTests\\node_modules\\.bin")
//  finalExecution(req.body.Path,req.body.jsonFile,req.body.binFolder)
  
  
  
  // app.post('/testRunFinalExecution',function(req,res) {
  // console.log(" testRunFinalExecution ")
  // console.log(req.body)
  // //finalExecution(Path,jsonFile,binFolder);
  // var finalExecution = function(Path,jsonFile,folder){
  // console.log(Path)
  // console.log(" final executryeriuyteriu req "+Path)
  
  // var nrc = require('node-run-cmd');
  // nrc.run(Path).then(function() {
  // console.log('Command failed to run with error: pass 2345 ');
  // res.json({"jsonFile":jsonFile,
  // "folder":folder,
  // "status":"generating report ...."
  // })
  // }, function(err) {
  // console.log('Command failed to run with error: ', err);
  // res.json({"jsonFile":jsonFile,
  // "folder":folder,
  // "status":"generating report ...."
  // })
  // });
  
  
  // // require('child_process').exec(Path, (err, stdout, stderr) => 
  // // //require('child_process').exec("C:\\Users\\user\\Desktop\\platform\\releaseint12\\uploads\\Agility-Cypress-Tests-master\\endToEndTests\\node_modules\\.bin\\trial.bat", (err, stdout, stderr) => 
  
  // // {
  // // console.log(" finalExecution result ")
  // // //if (err) throw err;
  // // if (err){
  // // console.log(err)
  // // res.json({"jsonFile":jsonFile,
  // // "folder":folder})
  // // // reportDataGeneration(jsonFile,folder)
  // // }else{
  // // // reportDataGeneration(jsonFile,folder)
  // // res.json({"jsonFile":jsonFile,
  // // "folder":folder,
  // // "status":"generating report ...."
  // // })
  
  // // }
  // // console.log(stdout, stderr);
  
  // // }); 
  // }
  // finalExecution(req.body.Path,req.body.jsonFile,req.body.binFolder)
  // console.log(req.body.Path,req.body.jsonFile,req.body.binFolder);
  
  // })
  app.post('/testRunFinalExecution',function(req,res) {
    var count = 0;
 // function  finalExecution(Path,jsonFile,folder) {
console.log("  iammmmmm        seeeeeeeeeeeeeee ");

var Path = req.body.Path;
var jsonFile = req.body.jsonFile;
var folder = req.body.binFolder;
var checkForCompleteFalse = false;
res.json({"jsonFile":jsonFile,
              "folder":folder,
              "status":"Time remaining (seconds) : ",
              "timeRequired":req.body.timeRequired
              });

return new Promise((resolve, reject) => {
  console.log(" promise iammmmmm        seeeeeeeeeeeeeee ");
var nrc = require('node-run-cmd');
// function checkCall() {
//     console.log(" check call  promise iammmmmm        seeeeeeeeeeeeeee ");
//    var checkForComplete = folder+"\\reports\\"+jsonFile;

//           var LineByLineReader = require('line-by-line');
            
//           lr = new LineByLineReader(checkForComplete)


//           lr.on('error', function (err) {
//             console.log(err+" lineread()")
//           });

//           lr.on('line', function (line) {
          

//           if(line.includes("Run Finished") == true ){
//               checkForCompleteFalse = true;
//           }

      

//           });

//           lr.on('end', function () {
//               if (checkForCompleteFalse == true) {
//                 console.log(" completed   ")
//                   var b =({"jsonFile":jsonFile,
//               "folder":folder,
//               "status":"generating report ...."
//               })
//                 resolve(b); 
//                //res.json(b);
//               // return true
//               }else{
//                 console.log(" not completed   ")
//                 //return false
//               }
//           });

// }//checkCall
// var refreshId = setInterval(function() {
//  checkCall();

// if ( checkForCompleteFalse === true && count === 0) {
//   count++;
//   console.log("properID true   "+checkForCompleteFalse )
// clearInterval(refreshId);
// // res.json({"jsonFile":jsonFile,
// //               "folder":folder,
// //               "status":"generating report ...."
// //               });
// }
// }, 10000);

    //setInterval(checkCall,150000);
  nrc.run(Path).then(function(err) {
      console.log(' pass 2345 ',err);
  console.log(' pass 2345 ',err.length);
   console.log(' pass 2345 array',err[0]);

   

  // if (err[0] != 0  ) {
  //   console.log(" iam inprogress the cmd "+count++)
  //    // var b =({"jsonFile":jsonFile,
  //    //          "folder":folder,
  //    //          "status":"generating report ...."
  //    //          })
  //    // resolve(b); 
  //  // res.end()
  // }else{
  //   console.log(" iam completed the cmd "+count++)
  //  // callme();
  //    //res.end();
  //    //callme2();
  //      var b =({"jsonFile":jsonFile,
  //             "folder":folder,
  //             "status":"generating report ...."
  //             })
  //    resolve(b); 
 
  // }
  
  }, function(err) {
  console.log('Command failed to run with error: ', err);
 // res.end()
  });



});
//}//final

//  finalExecution(req.body.Path,req.body.jsonFile,req.body.binFolder).then(result => {
//  console.log("   finalExecution    finalExecution    finalExecution ");
// console.log(result);
////  //  res.redirect('/testRunReportDataGeneration');
// res.json(result)
// }).catch(err => {
// console.log(err);
// });
  
  })
app.post('/testRunReportDataChecking',function(req,res) {
//  function checkCall() {
  var jsonFile = req.body.jsonFile;
var folder = req.body.folder;
    console.log(" testRunReportDataChecking check call  promise iammmmmm        seeeeeeeeeeeeeee ");
  // var checkForComplete = ".\\uploads\\OPALCypressProject\\endToEndTests\\node_modules\\.bin"+"\\reports\\"+"10.json";
//finalExecution(".\\uploads\\OPALCypressProject\\endToEndTests\\node_modules\\.bin\\trial.bat", "10.json", ".\\uploads\\OPALCypressProject\\endToEndTests\\node_modules\\.bin")
 var checkForComplete= folder+"\\reports\\"+jsonFile;
var   checkForCompleteFalse1 = false;
          var LineByLineReader = require('line-by-line');
            
          lr = new LineByLineReader(checkForComplete)


          lr.on('error', function (err) {
            console.log(err+" lineread()")
          });

          lr.on('line', function (line) {
          

          if(line.includes("Run Finished") == true ){
              checkForCompleteFalse1 = true;
          }

      

          });

          lr.on('end', function () {
              if (checkForCompleteFalse1 == true) {
                console.log(" checker completed   ")
              //     var b =({
              // "status":true
              // })
              //  // resolve(b); 
              //  res.json(b);
               res.json({"jsonFile":jsonFile,
              "folder":folder,
              "status":"generating report ",
              "finished":true,
              
              });

              // return true
              }else{
                console.log("checker vijay  not completed   ")
                  res.json({"jsonFile":jsonFile,
              "folder":folder,
              "status":"Time remaining (seconds) : ",
              "finished":false,
              "timeRequired":req.body.timeRequired
              });
                //return false
              }
          });

//}//checkCall
// var refreshId = setInterval(function() {
//  checkCall();

// if ( checkForCompleteFalse === true && count === 0) {
//   count++;
//   console.log("properID true   "+checkForCompleteFalse )
// clearInterval(refreshId);
// res.json({"jsonFile":jsonFile,
//               "folder":folder,
//               "status":"generating report ...."
//               });
// }
// }, 10000);

})


app.post('/testRunReportDataGeneration',function(req,res) {



console.log("   '/testRunReportDataGeneration'   entered ")





var reportDataGeneration = function(jsonFile,folder){
  console.log(" iam jsonFile started "); 


  var reportJson = folder+"\\reports\\"+jsonFile;
 var convertedJson = folder+"\\reports\\"+"record.json";

var stream = fs.createWriteStream(convertedJson);
var todayDate= Date.now();
var dates = new Date(((new Date(todayDate).toISOString().slice(0, 23))+"-05:30")).toISOString();
var a = dates.split("T");
var date = a[0];
function runCountFetch(){
  console.log("calllllllllllllllll");
  db.runCount.find({},function(err,doc){console.log(doc[0].runNumber)
      lineRead(doc[0].runNumber)
  })
  
}
runCountFetch();

function lineRead(run){
          console.log(" lineRead ");
          var count = 1;
          var lineData = [];
          var conditionCheck = false;
          var run =run;

          screenshotsConditionTrue = false;
          videoConditionTrue = false;

          var LineByLineReader = require('line-by-line');

          lr = new LineByLineReader(reportJson)


          lr.on('error', function (err) {
            console.log(err+" lineread()")
          });

          lr.on('line', function (line) {
          if(count === 1 ){
          fs.appendFileSync(convertedJson,"\n"+"[", 'utf8');

          }

          if(line.includes("Spec Ran") == true ){

          var c = line.replace("\\", "/").substr(1).slice(0, -1);
          var z =","+"{"+ "\""+"Spec Ran"+"\""+":"+"\""+c.slice(15, -1)+"\""+","+"\""+"run"+"\""+":"+"\""+run+"\""+","+"\""+"Date"+"\""+":"+"\""+date+"\""+"}"+",";


          fs.appendFileSync(convertedJson,z, 'utf8');
          }
          if(line.includes("(Screenshots)") === true ){
          screenshotsConditionTrue = true;
          videoConditionTrue = false;

          }
          if(screenshotsConditionTrue == true){

          if(line.includes(":") === true ){
          var z1 ="{"+ "\""+"Screenshot"+"\""+":"+"\""+line+"\""+"}"+",";
          fs.appendFileSync(convertedJson,"\n"+z1, 'utf8');
          }
          }
          if(line.includes("(Video)") === true ){
          screenshotsConditionTrue = false;
          videoConditionTrue = true;

          }
          if( videoConditionTrue == true){

          if(line.includes(":") === true && line.includes("======") !== true && line.includes("Running:") !== true ){

          var z2 ="{"+ "\""+"Video"+"\""+":"+"\""+line+"\""+"}"+",";
          fs.appendFileSync(convertedJson,"\n"+z2, 'utf8');
          }
          if(line.includes("======") == true ){
          videoConditionTrue = false; 
          }
          }
          if(line.includes("Running") == true ){
          videoConditionTrue = false;
          screenshotsConditionTrue = false;

          conditionCheck = true;
          }else{
          count++
          }

          if (conditionCheck == true) {
          if(line.includes("Results") == true ){


          conditionCheck = false;

          }else
          {
          if(line.includes("Running") != true ){
          fs.appendFileSync(convertedJson,"\n"+line, 'utf8');

          }
          }

          };






          });

          lr.on('end', function () {
          fs.appendFileSync(convertedJson,"\n"+"{}]", 'utf8');
            console.log("    db call avtive")
           dbCall(run)
          });

}

//lineRead()


function dbCall(Run){
    console.log("  enter the call  ")
fs.readFile(convertedJson, 'utf8', function (err, data) {
if (err) throw err;
var newStr = data.replace(/\\/g, "/");;

obj = JSON.parse(newStr);
var num = 1;
var arr = [];
var arrPush = 0;
var conditionActivate = false;
obj.forEach(element => {
num++;
if(element.hasOwnProperty("Spec Ran")){
conditionActivate = true;
arr[arrPush-1].otherData = [];
}
if (element.hasOwnProperty("stats")){
conditionActivate = false;
}
if(element.hasOwnProperty("Screenshot")){
}
if(conditionActivate){
arr[arrPush-1].otherData.push(element);
}else{
arr.push(element);
arrPush++;
}
});
console.log(" insert dadad")
console.log(arr)
db.Json.insert(arr,function(error,info){
    var incrementedrun = parseInt(info[0].otherData[0].run)+1;
    var runNumnber = incrementedrun;
    db.runCount.update({"cypressReport" : "cypress"},{$set:{"runNumber":runNumnber}},function(err,doc){})
// collectingData();
    res.json({  "status":"Completed please check the report #"+Run})
})


})
}


}//reportDataGeneration
reportDataGeneration(req.body.jsonFile,req.body.folder)

})//testrunreportDataGeneration

//============================================================================================================================
  // dbsNames (moduleName,featureName,lineNum,projectSelection)
  //})
//=======

//  var featureDuplicate=[]



  app.post('/testScriptChange',function(req,res)
  {
  var required=[]
  console.log("llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll")
  console.log(req.body[0].featureName[0].scriptName[0].scriptName)
cypressBatFile(req.body)
//req.body[0].featureName[0].scriptName[0].scriptName
required.push(req.body[0].featureName[0].scriptName[0].scriptName)
console.log(required)
 //var fs = require('fs');
  
  
  var file = "./"+"uploads/"+req.body[0].projectSelection+"/endToEndTests/node_modules/.bin/cypress/integration/"+req.body[0].moduleName+"/"+req.body[0].featureName[0].featureName+".js"; 
  console.log(file+"testpathhhhhh");
  
//   var data = fs.readFileSync(testPath).toString().split("\n");
//   //console.log("ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt")
//   console.log(data)
//   // console.log(htmlFiles)
 

 //var required = ['Demo on Paytm site','Demo on flipkart site1','Demo on flipkart site2','Demo on flipkart site3','Demo on flipkart site4']
//var file = req.body[0].featureName[0].featureName;
var requiredLength = required.length -1;



var LineByLineReader = require('line-by-line');
// lr = new LineByLineReader("./uploads/projectjavatriall756/Sample1/Features/abc.feature")
// lr = new LineByLineReader("uploads/projectjavatriall7564/Sample1/Features/abc.feature")
lr = new LineByLineReader(file)
//console.log(lr)
var newCss = '';
lr.on('error', function (err) {
// 'err' contains error object
//console.log(" error rr rr rr ")
});

lr.on('line', function (line) {
var conditionChek = false;
required.forEach((element,index) =>{

if(line.includes(element) == true ){
conditionChek = true;
newCss += line.toString().replace("it.skip", "it")+"\n";

console.log(" required ");
}
if( conditionChek == false && line.includes(element) == false && requiredLength == index){
// it skip
if(line.includes("cy.") == false && line.includes("it") == true && line.includes(",") == true && line.includes("it.skip") == false ){
// console.log(line)
newCss += line.toString().replace("it", "it.skip")+"\n";
}else{
newCss += line+"\n"; 
}

}
})


});

lr.on('end', function () {
console.log(" end end Scenario true ")
fs.writeFile(file, newCss, function(err) {
if (err) {
return console.log(err);
} else {
console.log('Updated!');
}
});
// All lines are read, file is closed now.
});
//   for(i=0;i<data.length;i++){
//     console.log("ttttttt")
//    if( data[i].includes(" it('"=== true)) {

// console.log(data[i])

//    data[i] = "it.skip";
 
//  }
//   // console.log(true);
//   }
  


 //  data = data.join("\n");
  
 //  fs.writeFile(testPath,data,function(err)
 //  {
 //  if (err) return console.log(err);
 //  // console.log(text);
 //  console.log("Replaced");
  
 // //execTestRunner( path,pomFilePath)
 //  }) 
  









  //checkxml(req.body)
  
  // dbsNames (moduleName,featureName,lineNum,projectSelection)
  })
//>>>>>>> f40691273c2e1609e48105331b3acaacee43b64b
  
  
  
 // var checkxml = function(projectFolder,featureName,lineNum,moduleName){
  var checkxml = function(data){ 
  console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");
  console.log(data);
  console.log(data[0].projectSelection)
  const Filehound = require('filehound');
  Filehound.create()
  .ext('xml')
  //.match(b)
  .paths( "./uploads/"+data[0].projectSelection)
  .find((err, htmlFiles) => {
  
  htmlFiles.forEach(function(file) {
  
  var LineByLineReader = require('line-by-line');
  lr = new LineByLineReader(file)
  //console.log(lr)
  lr.on('error', function (err) 
  {
  // 'err' contains error object
  //console.log(" error rr rr rr ")
  });
  
  lr.on('line', function (line) 
  {
  //console.log(line)
  
  
  if((line.includes("<exclude>") === true) && (line.includes("</exclude>") === true) && (line.includes(".java") === true))
  { 
  var res = (line.replace("<exclude>",'').replace("</exclude>",'')); 
  
  let pomFilePath = ( file.split("").reverse().join("")).substring(file.indexOf("\\")+1).split("").reverse().join("");
  
  Filehound.create()
  .ext('java')
  .match(res)
  .paths( "./uploads/"+data[0].projectSelection)
  .find((err, htmlFiles1) =>
  {
  // testRunnerCall(htmlFiles1[0].split("\\").pop() ,projectFolder,pomFilePath,featureName,lineNum,moduleName)
  
  console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww");
  testRunnerCall(htmlFiles1[0].split("\\").pop() ,data[0].projectSelection,pomFilePath,data)
   //console.log(htmlFiles1[0]);
  // console.log(data)
  
  }) 
  }
  });
  
  lr.on('end', function () {
  // console.log(" end end Scenario true ")
  // All lines are read, file is closed now.
  });
  
  })
  })
 // } // checkxml
  }
  
 // var testRunnerCall = function(runnerName,path,pomFilePath,featureName,lineNum,moduleName){
  
  //var testRunnerCall = function(runnerName,ps,pomFilePath,mn,fn,ln){ 
    var final = [];
    var arr = [];
    var testRunnerCall = function(runnerName,ps,pomFilePath,data){ 
  console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee");
  console.log(data)
  var lineString = ''; 
  for(var i=0;i<data.length;i++){
    for(var j=0;j<data[i].featureName.length;j++){
      for(var k=0;k<data[i].featureName[j].scriptName.length;k++){
    //    console.log(data[i].featureName[j].scriptName[k].lineNum)
        var ln = data[i].featureName[j].scriptName[k].lineNum;
      console.log(k+"pppppppppppppppppppppppppppppppppp")
      if(k===0){
        var lineString1 = "\""+data[i].moduleName+"/"+data[i].featureName[j].featureName+".feature:"+data[i].featureName[j].scriptName[k].lineNum;
        lineString = lineString.concat(lineString1)
        var addString = lineString;
      }
      else{
        var qq="ww"
        var lineString2 = ":"+data[i].featureName[j].scriptName[1].lineNum;
      //  console.log(lineString2)
      lineString = lineString.concat(lineString2)
      var addString = lineString;
      }


      }
    }
  }
 

  console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
   console.log(addString);
  // var abc=data.lineNum;
  // console.log(abc)
  //}
  const Filehound = require('filehound');
  Filehound.create()
  .ext('java')
  .match(runnerName) // .match('*TestRunnerNew.java*')
  .paths("./uploads/"+ps)
  
  .find((err, htmlFiles) => {
  
  if (err) return console.error("handle err", err);
  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
  
  var fs = require('fs');
  
  
  var testPath = "./"+htmlFiles; 
  //console.log(testPath+"testpathhhhhh");
  
  var data = fs.readFileSync(testPath).toString().split("\n");
  //console.log("ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt")
 // console.log(data)
  // console.log(htmlFiles)
 
  for(i=0;i<data.length;i++){
  if( data[i].includes("@CucumberOptions")=== true) {
  // for(l = 0 ;l<=data.length;l++){
  // var lineString = "\""+moduleName+"/"+featureName[l]+".feature:4"+"\"";
  // }
console.log(addString)
  // var lineString = "\""+sampleData[0].moduleName+"/"+sampleData[0].featureName+".feature:"+sampleData[0].lineNum+"\"";
   if(qq==undefined){
   data[i] = "@CucumberOptions(features="+"{"+addString+"\""+"},";
  }
 else{
  console.log("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")
  data[i] = "@CucumberOptions(features="+"{"+addString+"\"" +","+"},";
  }
  // console.log(true);
  }
  }


  data = data.join("\n");
  
  fs.writeFile(testPath,data,function(err)
  {
  if (err) return console.log(err);
  // console.log(text);
  console.log("Replaced");
  
 execTestRunner( path,pomFilePath)
  }) 
  
  })
 // }//
  }
  var execTestRunner = function( projectName,pomFilePath){
    console.log("oooooooooooooooooooooooooooooooooooooo")
    console.log(pomFilePath)
  // var pomFilePath = "uploads\\projectjava12\\Sample1";
  const Filehound = require('filehound');
  console.log(" i am ready for executoooooo projectName "+projectName)
  console.log(__dirname)
  
  var fs = require('fs'); 
  var requiredPath = __dirname+"\\trial.bat"; 
  console.log(requiredPath)
  
  // var requiredPath = "/"+projectName;
  // var requiredPath = _dirname+"\\uploads"+"\\"+projectName+"\\trial.bat"; 
  
  var stream = fs.createWriteStream(requiredPath);
  
  stream.write("@echo off\n");
  stream.write("cd .\\"+pomFilePath+" && mvn clean install");  
  console.log(pomFilePath + " fini pomFilePath ")
  
 // finalExecution( requiredPath) 
  
  } 
  

app.get('/idModule',function(req,res){




db.moduleName.find({}).sort({_id:-1}).limit(1,function(err,doc)
{
res.json(doc);
//console.log(doc);
})
})
app.get('/idFeature',function(req,res){




db.featureName.find({}).sort({_id:-1}).limit(1,function(err,doc)
{
res.json(doc);
//console.log(doc);
})
})
app.get('/featureName',function(req,res){




db.featureName.find({},function(err,doc){ 
res.json(doc);

})
})

app.get('/getMoId:mI',function(req,res){
console.log("mmmmmmmmmmmmmmmmmm")
var moduleName=req.params.mI
db.moduleName.aggregate([
{$match:{"moduleName":moduleName}},



{"$lookup":
{"from":"featureName",
"localField":"moduleId",
"foreignField":"moduleId",
"as":"unitedFM"
}
}
],function(err,doc){
res.json(doc);
//console.log(doc)
})

})
app.get('/mId:mN',function(req,res){
console.log("llllllllllllllllll")
var moduleName=req.params.mN
db.moduleName.find({"moduleName":moduleName},function(err,doc){ 
res.json(doc);
})
})
app.post("/createNewProject:newprojectDetails",function(req,res){
  var newprojectDetails = req.params.newprojectDetails;
  var arr = newprojectDetails.split(',');
  var newProjectName = arr[0];
  var newFrameworkName = arr[1];
  var sourcePath = './autoScript/TestNg/Finale';
  var dirName = './uploads/opal/'+newProjectName;
  console.log(dirName)
  console.log(sourcePath)
  db.projectSelection.insert({"projectSelection":newProjectName,"framework":newFrameworkName,"projectId":"PID02"},function(err,doc){
  if (!fs.existsSync(dirName)){
  fs.mkdirSync(dirName );
  var fsCopy = require('fs-extra')
  let source = path.resolve( __dirname,sourcePath )
  let destination = path.resolve( __dirname, dirName)
  fsCopy.copy(source, destination)
  .then(() => console.log('Copy completed!'))
  .catch( err => {
  console.log('An error occured while copying the folder.')
  return console.error(err)
  })
  res.json(doc)
  }
  })
  
  })
// app.post("/createNewProject:newprojectDetails",function(req,res){
//    var newprojectDetails = req.params.newprojectDetails;
//    var arr = newprojectDetails.split(',');
//    var newProjectName = arr[0];
//    var newFrameworkName = arr[1];
//    console.log(newProjectName)
//    console.log(newFrameworkName)
//   db.projectSelection.insert({"projectSelection":newProjectName,"framework":newFrameworkName,"projectId":"PID02"},function(err,doc){
//     res.json(doc)
//   })

// })
app.post('/postModuleName',function(req,res)
{
//var moduleName=req.params.moduleName;

//var moduleName = str_array[1];
console.log(req.body.moduleName)


db.moduleName.insert(req.body ,function(err,doc)
{
res.json(doc);


});


})
app.post('/postFeatureName',function(req,res)
{

//var moduleName=req.params.moduleName;

//var moduleName = str_array[1];
//console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")

db.featureName.insert(req.body ,function(err,doc)
{
res.json(doc);
//console.log(doc)
});


})
app.post('/savingImportData',function(req,res) {
console.log("data data data data data data data data");
// var datastr=req.params.datareceipt;

// var datastr_array=datastr.split(",");
// var pname=datastr_array[0];
// // var tran=datastr_array[1];
// // var vNo=datastr_array[2];
// console.log(pname)
//console.log("oooooooooooooooooo")
//console.log(req.body)
db.importScript.insert(req.body,function(err,doc){
//console.log("5gggggggggggggggggggggggg")
res.json(doc);
//console.log(doc);
})

})


app.post('/postmodule',function(req,res){
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
  console.log(req.body)
  console.log(req.body.moduleId)
  //var data = req.body.moduleId ;

  db.featureName.find({  "moduleId" : req.body.moduleId,"projectId" : req.body.projectId},function(err,featureNames){
    res.json(featureNames);
    //   console.log(doc)
  })
})

app.post('/postFeat',function(req,res){
 console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 123")
  console.log(req.body)
  console.log("feature id  iddd "+req.body.featureId)
  var  finalArray = [];
  var count = 0;
  db.type.find({ },function(err,typeData){
  db.priority.find({ },function(err,   priorityData){
    
  db.testScript.find({  "moduleId" : req.body.moduleId,"projectId" : req.body.projectId, "featureId" :req.body.featureId},function(err,testScriptData){
   // res.json(doc);
   console.log(testScriptData.length+"          len")
   console.log(testScriptData[0].priorityId)
   console.log(testScriptData)
   if(testScriptData[0].priorityId != undefined){
    testScriptData.forEach(function(data) {
        console.log(data);
        
        // if(testScriptDetail.moduleId === moduleDetails[j].moduleId && testScriptDetail.featureId ===featureDetails[l].featureId){
        // console.log(module[j].moduleName);
        obj = {}
       // obj['moduleName']= data.moduleName;
        //obj['featureName']= featureDetails[0].featureName;
       // obj['lineNum']= testScriptDetail.lineNum;
        obj['scriptName']=data.scriptName;
        obj['time']=data.time;
        priorityData.forEach(function(priority) {
          if(priority.priorityId === data.priorityId ){
            obj['priorityName']= priority.priorityName;
          }
        })
        typeData.forEach(function(type) {
          if(type.typeId === data.typeId ){
            obj['typeName']= type.typeName;
            console.log(typeof  obj.time)
            finalArray.push(obj);
           console.log( finalArray)
          }
        })
        //obj['typeName']=;
        
        //obj['projectSelection']=projectDetails[0].projectSelection;
       
        //console.log(newArray)
        //count++;
        if(count === ( testScriptData.length - 1)){
        console.log(" resend call eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee activate")
        res.json(finalArray);
        }else{
          count++;
        }
    
       // }
        
        }); 
      }else{
        console.log("else  loop ")
        res.json(testScriptData);
      }








      })
    })
  
   // console.log(doc)
  })

})

app.get('/importType',function(req,res){

  console.log("kkkkkkkkkkkkkkkkkkkkk")
  db.type.find({},function(err,doc){ 
  res.json(doc);
  //console.log(doc)
  })
  })

  app.get('/importPriority',function(req,res){  
  db.priority.find({},function(err,doc){ 
  res.json(doc);
  // console.log("mm"+doc)
  })
  })
  
  app.get('/getIds:ss1',function(req,res){
    console.log("jjjjjjjjjjjjjrrrrrrrrrrrrrrrrrr 34") 
    var data = req.params.ss1;
   // var data = req.params.ss1;
  console.log(data)
  var data_Array = data.split(",");
  //var projectId = data_Array[0];
  //projectId= parseInt(projectId)
  var scriptName =data_Array[0];
  var typeName = data_Array[1];
  //moduleId= parseInt(moduleId)
  
  var priorityname = data_Array[2]; 
  //featureId= parseInt(featureId)
   console.log(typeName)
  var time = data_Array[3]; 
    var projectId = data_Array[4]; 

  db.testScript.find({"scriptName":scriptName,"projectId":projectId},function(err,doc1){ 
    console.log("sssshhhhhiiiiivvvvvvaaaaa     "  + doc1[0].scriptId)
  db.type.find({"typeName":typeName},function(err,doc2){ 
        console.log("sssshhhhhiiiiivvvvvvaaaaa")
        console.log(doc2[0].typeId)
  db.priority.find({"priorityName":priorityname},function(err,doc3){
    console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%vvvvvvaaaaa")
    console.log(doc3[0].priorityId)

    var scriptId=doc1[0].scriptId
  var typeId =doc2[0].typeId;
  var priorityId =doc3[0].priorityId
 // })
  

    console.log(data);
    db.testScript.update({"scriptId":scriptId,"projectId":projectId},{$set:{ "priorityId" : priorityId, "typeId" : typeId, "time" : Number(data_Array[3])}},function(err,doc){ 
      res.json(doc);
       console.log(" updates sdhasddhs     ")
      })
  })
})
})
  })

  /////////////////////testLinkTCUpdateCall//////////



app.post('/testLinkTCUpdateCall',function(req,res){
  console.log("req.body")
  tc.reportTCResult(req.body,function(callback){ console.log(callback); res.json(callback)});
  })

  /////////////////////////////////////////////////////
  
require('./server/reportServer')(app)  
// require('./server/mobileServer')(app)     
require('./server/Docker')(app) 
require('./server/Appium')(app) 
require('./server/object')(app)
require('./server/testNgServer')(app)        
require('./server/createReUseable')(app)  

 const port=2111;
app.listen(port,function() {
  console.log("server running on port"+port);
});

app.get('/myloginDetails:loginCredential',function(req,res){

  var loginCredentialNew = req.params.loginCredential;
  var blockData=loginCredentialNew.split(',')
  var userName=blockData[0];
  var password=blockData[1];
  db.loginDetails.find({ $and:[{userName:userName},{password:password} ]},function(err,doc){ 
  res.json(doc);
  })
  })
function createDefaultCollections () {
  db.countInc.find(function(err,count){
    if (count.length == 0) {
      console.log("zero")
      var obj =   ({"projectID" : "pID",
    "pCount" : 1,
    "mCount" : 1,
    "fCount" : 1,
    "sCount" : 1,
    "moduleID" : "mID",
    "featureID" : "fID",
    "scriptID" : "sID"})
    // console.log(obj)
    
    db.countInc.insert(obj)
    }else{
      console.log(" not zero")
       }

  })
   db.projectSelection.find(function(err,projectSelection){
    if (projectSelection.length == 0) {
      console.log("zero")
      var obj =   ({
       "projectSelection" : "Create New Project",
    "projectId" : "pID0",
    "framework" : "Cypress"
  })
    // console.log(obj)
    
    db.projectSelection.insert(obj)
    }else{
      console.log(" not zero")
       }

  })
  db.runCount.find(function(err,run){
    if (run.length == 0) {
      var obj1 =   ({
        "cypressReport" : "cypress",
        "runNumber" : 1,
      })
    
    db.runCount.insert(obj1)
    }else{
      console.log(" not zero")
       }

  })
  // for login 
  db.loginDetails.find(function(err,login){
    if (login.length == 0) {
      var obj2 =   ({
        "userName" : "Admin",
        "password" : "Admin",
      })
    
    db.loginDetails.insert(obj2)
    }else{
      console.log(" not zero")
       }

  })
   // for login 
   db.priority.find(function(err,priority){
    if (priority.length == 0) {
      var obj2 = [{
        "priorityId" : "p04",
    "priorityName" : "P4"
      },{
        "priorityId" : "p03",
        "priorityName" : "P3"

      },{
        "priorityId" : "p02",
        "priorityName" : "P2"
      },{
        "priorityId" : "p01",
        "priorityName" : "P1"

      }
    ]  
    console.log(" lennn "+obj2.length)
    for(var i = 0;i<obj2.length;i++){
      console.log(obj2[i])
      db.priority.insert(obj2[i])
    }
    
    
    }else{
      console.log(" not zero")
       }

  })
  // for login 
  db.type.find(function(err,type){
    if (type.length == 0) {
      var obj3 =   [{
        "typeId" : "t02",
    "typeName" : "Negative"
      },{
        "typeId" : "t01",
    "typeName" : "Positive"
      }]
      for(var i = 0;i<obj3.length;i++){
       // console.log(obj2[i])
        db.type.insert(obj3[i])
      }
   
    }else{
      console.log(" not zero")
       }

  })
  
}
createDefaultCollections ()
