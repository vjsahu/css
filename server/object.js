module.exports=function(app){

 
    var mongojs=require('mongojs');
    
    var db=mongojs('collections',[])
    const Filehound=require('filehound');

    var fs = require('fs')
    var rimraf = require('rimraf');
    const path=require('path');


    //console.log("ennnnnnnnnnnnnnnnnnnnnnnennn")

app.post('/saveCreateTestData',function(req,res)
{
    console.log("uiiiiiiiiiiiuiiuiiuiiuiiuiuiuiiuiuiuui")
    db.CreateTest.insert(req.body,function(err,doc)
    {
    res.json(doc);
    console.log(doc)
    });
})
app.get('/getCreateTest',function(req,res){

    console.log("pppppppppppppppppppooooooooooooooooooo")
   db.CreateTest.find({},function(err,doc){ 
   res.json(doc);
console.log(doc)
   })
   })
app.post('/totalObject',function(req,res)
{
    console.log("uiiiiiiiiiiiuiiuiiuiiuiiuiuiuiiuiuiuui")
    db.objectRepository.insert(req.body,function(err,doc)
    {
    res.json(doc);
    console.log(doc)
    });
})

app.get('/getObject',function(req,res){

     console.log("pppppppppppppppppppooooooooooooooooooo")
    db.objectRepository.find({},function(err,doc){ 
    res.json(doc);
 console.log(doc)
    })
    })



    app.get('/objectNameDetails:pageName',function(req,res){
       var rr= req.params.pageName
       var dd= rr.split(",")
       console.log(dd)
        console.log(dd[0])
        console.log(dd[1])
          console.log("ooooooooooooooooooo"+req.params.openPage)
        db.objectRepository.find({"pageName":dd[0]},function(err,doc){ 

// console.log(doc[0].objectName)
// console.log(doc[0].objectName.length)
for(i = 0;i<doc[0].objectName.length;i++){
    // console.log(doc[0].objectName[i])
    // console.log("ooooooooooooooooooo"+dd[1])
    if(doc[0].objectName[i].objectName == dd[1]){
        console.log("pppppppppppppppppppppqqqqqqqqqqqqq")
     console.log(doc[0].objectName[i])
       res.json([doc[0].objectName[i]]);
    }

}
        })
     })


    app.post('/objectTestName',function(req,res){
        console.log("wwwwwwwwwwwwwooooooooooooooooooo"+req.body.pageName)
        var objectName=req.body

        
    db.objectRepository.find({"pageName":req.body.pageName},function(err,doc)
{

    db.objectRepository.update(
        // object.o.name
        {"pageName":req.body.pageName},{$push:{objectName }
        })
        })
    })


// var name=[{"opal":"company44","employess":50}]

// // db.objectRepository.insert(name,function(err,doc)
// // {
// // //res.json(doc);
// // console.log(doc)
// // });
// db.objectRepository.find({"opal":"company33"},function(err,doc)
// {

//     db.objectRepository.update(
//         {"opal":"company33"},{$set:{ name}
//         })


// });




}