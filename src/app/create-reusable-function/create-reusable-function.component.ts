import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http,Response } from '@angular/http';
import { ProjectDetailServiceComponent } from '../pDetail.service';
import {Post} from '../post';
import { TestComponent} from '../create-test-case/create';

@Component({
selector: 'app-create-reusable-function',
templateUrl: './create-reusable-function.component.html',
styleUrls: ['./create-reusable-function.component.css', '../css/parent.css'],
providers: [ProjectDetailServiceComponent,TestComponent]
})
export class CreateReusableFunctionComponent implements OnInit {
action: any;
object: any;
account: any;
reusable:Object={};
act:Object={};

 
resultactions:Post[];
objectData=[];
showExcelData:any;
excelFileName: Post[];
excelOpal:Object={};
comExcelValue: string;
projectDetails:string;
disable:boolean;
add:boolean;
saved:boolean;
constructor(private router: Router,private route:ActivatedRoute,private http:Http,private data:ProjectDetailServiceComponent) { }

ngOnInit() {
// var excelPath="C:/Users/Opal/Desktop/integrating/29/batchFiles/";
this.http.get('http://localhost:2111/getExcelFile')
.map((response: Response) => <Post[]>response.json())
.subscribe(result => { this.excelFileName = result;
console.log(this.excelFileName);
});
this.projectDetails = this.data.selectedProject();
    this.showExcelData=false;

    this.data.getActions().subscribe(typeData1 => this.resultactions= typeData1);
}

excelOpalFunCall(modalValue){
    if( (modalValue.excelRow  && modalValue.excelFile && modalValue.excelSheet && modalValue.excelCell) != undefined ){
        this.comExcelValue = modalValue.excelFile+","+modalValue.excelSheet+","+
        modalValue.excelRow+","+modalValue.excelCell;
    }


}

excel(excelActions)
{
    if(excelActions.actions == "Excel")
    {
        this.showExcelData=true;
    }
    else{
        this.showExcelData=false;
    } 
    console.log(excelActions.actions)
}
addType=[];

 



///////////////////////////////////////////////////////////




 
saveData(actionAll){
    
     
//   console.log(action+','+object+','+account)
//alert(actionAll.actions.testNgKey)
  var obj={};
   obj["action"]=actionAll.actions.actions;
  obj['object']=actionAll.object;
  obj['input']=actionAll.account;
  obj['testNgKey']=actionAll.actions.testNgKey;

 this.objectData.push(obj);
 console.log(this.objectData);
 

 actionAll.actions='';
 actionAll.object='';
 actionAll.account='';
 
 this.add=false;
 this.saved=true;
}

index2: any;
dataaa:any;
row(data,index){
  // alert(index)
  this.index2=index;
//  alert("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@"+data.action+","+data.object+","+data.input)
  this.dataaa=data;
  console.log(this.dataaa)
  this.disable=true;
}

clear(){
  // alert("ok")
  this.objectData=[];
  // console.log(this.objectData)
  // alert(this.objectData)
}
deleteData=[];
delete(){
  // alert("ok")
  this.disable=false;
  this.deleteData = this.objectData.splice(this.index2,1)
  console.log(this.deleteData)
}

Adddata(){
  // alert("hi")
  this.add=true;
}













//////////////////////////////////////////////////////////////////


// saveData(act,comExcelValue1){
// alert(act.testNgKey);
// // alert(comExcelValue1)
// var obj={};
// console.log(act)
// obj["action"]=act.actions.actions;
// obj['object']=act.object;
// if(comExcelValue1!=undefined){obj['input']=comExcelValue1}
// else{obj['input']=act.account}
// obj['testNgKey']=act.actions.testNgKey;
// this.objectData.push(obj);
// console.log(this.objectData);

// act.object='';
// act.actions='';
// act.account='';
// }



// saveData(act,comExcelValue1){
 
//     // alert(comExcelValue1)
//     var obj={};
//      alert(act.testNgKey)
//     obj["action"]=act.actions;
//     obj['object']=act.object;
//     if(comExcelValue1!=undefined){obj['input']=comExcelValue1}
//     else{obj['input']=act.account}
//     obj['testNgKey']=act.actions.testNgKey;
//     this.objectData.push(obj);
//     console.log(this.objectData);
    
//     act.object='';
//     act.account='';
//     this.data.getActions().subscribe(typeData1 => this.resultactions= typeData1);
//     }


reuseableParameters:object={};
SendMethod(reusable){
    this.reuseableParameters={
    modalData:this.objectData,
    reuseableClass:reusable.reuseAbleClass,
    reuseableMethod:reusable.reuseAbleMethod,
    reuseableParams:reusable.reuseAbleParameters,
    projectName:this.projectDetails
    }
return this.http.post('http://localhost:2111/Saveparameters',this.reuseableParameters)
.subscribe(data => {
console.log(data);
});

}


}
