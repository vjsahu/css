// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-report',
//   templateUrl: './report.component.html',
//   styleUrls: ['./report.component.css']
// })
// export class ReportComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
import { Component, Input,OnInit} from '@angular/core';
import { Http,Response } from '@angular/http';

import { ActivatedRoute, Router } from '@angular/router';

import { ProjectDetailServiceComponent } from '../pDetail.service';
import {Post} from '../post';
import {SelectionComponent} from '../projectSelection.component';
import { ImageViewerModule } from 'angular-image-viewer';




@Component({
selector: 'app-detail',

templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],

providers: [ProjectDetailServiceComponent] 

})//componrnt 

export class ReportComponent implements OnInit {


    date1: any;
    date2: any;
    runNumber: Post[];
    moduleChild:Post[];
// moduleId:Post[];

index:Post[];

moduleName:any;
featureName:any;

projectName:string;

//moduleChild:any[]=[];
indexvalue:number;

message:string;
show: boolean;
mo:boolean;
execute:boolean;
con:boolean;
testExecution:boolean;
displayModule:boolean;
displayFeature:boolean;
displayImport:boolean;
sMN:string;
validMn:string;
ind:number;
importMessage:any;
valid:boolean
everyTime: any;
selectedMod:Post[];
waitMessage:any;
wM:string;
modd: any
indU: any;
feat: any;
type: Post[];
priority: Post[];
scriptId: any;
scriptName: any;
typeId: any;
priorityId: any;
ids: any;
id: string;
typeName: any;
script:any;
testcase:any;
templatePath:any;
ed: boolean;
    report: boolean;
    resulttypes: Post[];
    updateTCResult: any;
    myUsername:string;
  reportDetails: Post[];

constructor(private router: Router,private route:ActivatedRoute,private data:ProjectDetailServiceComponent,private http:Http) {
this.show = false;
this.mo=false;
this.execute=false;
this.testExecution=false;
this.displayModule=false;
this.displayFeature=false;
this.displayImport=false;
this.ed=false;
this.report=false;

}


from:any;
todate:any;
ngOnInit(){

let UserName=sessionStorage.getItem('importedDetails');
let parsedUserName=JSON.parse(UserName)
this.myUsername=parsedUserName[0].userName
let dataFromProjectSelectionDropdown=sessionStorage.getItem('key');
this.projectName=dataFromProjectSelectionDropdown;
this.data.projectDetailss(this.projectName).subscribe(moduleData =>this.moduleName=moduleData);
this.data.typeDetails().subscribe(typeData =>this.type=typeData); 
this.data.priorityDetails().subscribe(priorityData =>this.priority=priorityData); 
this.data.getActions().subscribe(typeData1 => this.resulttypes= typeData1);
this.from=new Date().toISOString().substr(0, 10); 
this.todate=new Date().toISOString().substr(0, 10);
this.testcase=false;
}



showDropDown:boolean;


manualtoggle(clickModule,index){
this.sMN=clickModule;
this.ind=index;
//alert(index+"000")

this.data.moId(clickModule).subscribe(moduleData =>{this.selectedMod=moduleData;this.verificationModule(this.selectedMod)
;this.index=this.selectedMod[0].unitedFM});


this.data.childModuleDetails(index)
.subscribe(moduleData =>{this.moduleChild=moduleData;
this.indexvalue=this.moduleChild[0].moduleId;
console.log(this.moduleChild) });
console.log(this.moduleChild[0].moduleId);




}
verificationModule(vMF){
//console.log(vMF)
this.validMn=vMF[0].moduleName;



}

ngOnDestroy(){
console.log("destroy")
clearInterval(this.everyTime);


}

signOutFun()
{
  this.router.navigate(['logincomponent']); 
  location.reload();
}


changeShowStatus(){
//alert( this.valid)
//this.isValid="isValid";
if( this.valid!=true){
this.show = true;
this.testExecution=false;
this.mo=false;
this.execute=false;
this.report=false;
} 

}

showTestExecution(folderName){


//alert(this.projectName)

this.data.getProjectDir(this.projectName).subscribe(moduleData =>{this.importMessage=moduleData;this.importData(this.importMessage);console.log(this.importMessage)});
//alert(this.waitMessage)
this.data.createFolder(folderName).subscribe(moduleData =>{this.importMessage=moduleData;this.importData(this.importMessage);console.log(this.importMessage)});

//alert(this.importMessage+"oppppu")
// if(this.importMessage==undefined){
// //this.importMessage="Please Wait While Files Are Synchronizing"
this.show = false;
this.testExecution=true;
this.mo=false;
this.execute=false;
this.report=false;
// } else{
// this.show = false;
// this.testExecution=true;
// this.mo=false;
// this.execute=false;
// // this.importMessage="Please Wait While Files Are Synchronizing "
//}



}
importData(data){
this.valid=true;
//alert(data)
if(data==="Please Wait Files Are Synchronizing"){
this.importMessage=data

}
else if(data==="Synchronized Done"){
this.importMessage=data
this.valid=false;

}

// else{
// alert(this.importMessage)
// this.show = false;
// this.testExecution=true;
// this.mo=false;
// this.execute=false;
// this.valid=false;
// }

}
goCreateModule(){
this.everyTime=setInterval(() => {
this.ngOnInit();

}, 1000);
//console.log("kk")
//var displayModule:string
this.displayModule=true;
this.displayFeature=false;
this.displayImport=false;

}
goCreateFeature(){
this.displayFeature=true;
this.displayModule=false;
this.displayImport=false;
}
goImport(){
    //alert("1st")
     this.displayImport=true;
     this.displayModule=false;
     this.displayFeature=false;
     this.ed=false;
   }

mobile(){
this.mo=true;
this.execute=false;
this.show=false;

}

execution(){

this.execute=true;
this.mo=false;
this.show=false;

}

connect(){
this.con=true;
} 

clickModulee(a,index){
// alert(index)
// alert(a.moduleId)
// console.log(a);
// console.log(a.moduleId);
var mod = a ;
this.ind=index;
// this.ind=4;
return this.http.post("http://localhost:2111/postmodule", mod) 
.map(res=> res.json())
.subscribe(result =>this.modd =result);

// this.data.projectDetails().subscribe(moduleData =>this.moduleName=moduleData);


}

clickFeature(b,index){
// alert(index);
// alert(b.featureName)
this.indU=index;
// console.log(b)
return this.http.post("http://localhost:2111/postFeat", b) 
.map(res=> res.json())
.subscribe(result =>{this.feat =result;console.log(this.feat)});
}


save(){
// alert("jjjjjjjj")

//alert(feat)
// console.log(feat)

// console.log(this.script)
console.log(this.feat)



// this.scriptId=script.scriptId;
// alert(this.scriptId)
// alert(typeId);
// alert(priorityId)
// alert(value)

// 
for(var i =0 ;i<this.feat.length;i++){
  this.id=this.feat[i].scriptName+','+this.feat[i].typeName+','+this.feat[i].priorityName+','+this.feat[i].time+','+this.feat[i].projectId;
this.data.idDetails(this.id).subscribe(result =>{this.ids=result;});
}
// console.log(this.id)

}




changeShowReport(){

//alert( this.valid)
//this.isValid="isValid";
if( this.valid!=true){
this.report=true;
this.show = false;

this.testExecution=false;
this.mo=false;
this.execute=false;
} 

}



runNumberSearch(fromDate,toDate){
  //alert(" alert")
    this.date1=fromDate;
    this.date2=toDate;
    let runDate=fromDate+ ','+ toDate;
    this.http.get('http://localhost:2111/sarechDate'+runDate,{})
    .map((response: Response) => <Post[]>response.json())
    .subscribe(result => {
      this.runNumber=result; 
      console.log(this.runNumber)

    }) 
  }
  index1:any;
  fetchRunDetails(run,i){
    this.data.reportDetails(run).subscribe(typeData => this.reportDetails= typeData);
    console.log("ffff"+this.reportDetails);
this.index1=i;
 
  }
mergeTestLink(test){
    //alert("111111111111111111")
    var testcaseLength=test.length;
    
    
    
    this.updateTCResult=function(n){
    
    if(n<testcaseLength)
    {
    var obj07={};
    var user = "Admin";
    var testplanid = "5";
    var buildid = "1";
    var notes = "Demo For Vijay";
    var overwrite = "true";
    
    if(test[n].Result=="Pass"){var Result = "p";}
    else if(test[n].Result=="Fail"){var Result="f";}
    else{ Result = null;}
    // alert(test[n].TestCase)
    obj07["user"]=user;
    obj07["testplanid"]=testplanid;
    obj07["buildid"]=buildid;
    obj07["testcaseexternalid"]="CYR-9";
    // obj07["testcaseexternalid"]=test[n].TestCase;
    obj07["notes"]=notes;
    obj07["status"]="f"
    // obj07["status"]=Result;
    obj07["overwrite"]=overwrite;
    
    console.log(obj07);
    
    this.http.post('http://localhost:2111/testLinkTCUpdateCall',obj07,{})
    .map((response: Response) => <Post[]>response.json())
    .subscribe(result =>{
    console.log(result)
    });
    
    this.updateTCResult(n+1)
    }
    
    
    }
    this.updateTCResult(0);
    
    
    }

    import(){
        this.displayImport=true;
        this.ed=false;
    }
    
    edit(){
        this.ed=true;
        this.displayImport=false;
       
      }

      showError(errorMessage){
        alert(errorMessage);
      }
      onNavigate(screenshot){
        window.open(screenshot, "_blank");
    }

    onClickVideo(videoPath){
      window.open(videoPath, "_blank");
    }

    testCase(){
      this.testcase=true;
      this.ed=false;
      this.displayImport=false;

    
    }
    Case234=[];
    addCase(){
       
      this.Case234.push({
        'actions':"",
        'object':"",
        'input':"",
        "templatePath":""
       })

       console.log(this.Case234)


    }
    getPath(action){
      // alert(action.appiumPath)
      // alert(action.actions)
      this.Case234[0].templatePath = action.appiumPath;
      // this.http.get("http://localhost:2111/getTemplatePath"+action)
      // .map((response: Response) => <Post[]>response.json())
      //   .subscribe(result => {
      //     this.templatePath=result; 
      //     console.log(this.templatePath)
      //     console.log(this.templatePath[0].appiumPath)
      //     this.Case234[0].templatePath = this.templatePath[0].appiumPath;
      //     console.log(this.Case234)
      //   })
    }

allAct:any;
alAction:Object={}
actionSave(filename){
alert(filename);
var date234=new Date()

console.log(this.Case234)

this.alAction={

    allActitons:this.Case234,
    Date:date234,
    fileName:filename
}
console.log(this.alAction)
// this.http.post('http://localhost:2111/postAllActions',this.alAction)
// .subscribe(result =>{
// console.log(result)
// });

}

}
