import { Component ,OnInit,OnDestroy} from '@angular/core';

import { Http,Response , Headers} from '@angular/http';

import { Observable } from 'rxjs';

import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {Post} from './post';
import{ObjectServiceComponent} from './object.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
   selector: 'app-objectname',
 
  templateUrl:'./html/objectName.html',


   //styleUrls: ['./pDetail.component.css'],

       

})//componrnt  closing

export class ObjectNameComponent implements OnInit  {
    pageName:string;
    image:string;
    name:string;
    value:string;
    url:string;
    objectName:string
    selectedPageName:string
    // displayPageName:any=[]
    constructor(private http:Http, private sendObject:ObjectServiceComponent,private router: Router) {
  //alert("jjj")

 
    }
 
    displayNewObject=[]
    hideObjectData:any
    openPage:string;
      ngOnInit(){
    // this.ll()
     
    
    setInterval(()=> {
      this.pageName=sessionStorage.getItem('pageName');
    this.openPage=sessionStorage.getItem('openPageName');
   console.log(this.openPage+"kkk")
 
   sessionStorage.setItem('openPageName',"");
    this.selectedPageName=sessionStorage.getItem('selectedPageName');

     // alert(this.selectedPageName)
      // if(selectedPageName!=)
     // alert( this.pageName+"000")
        this.sendObject.objectNameDetails(this.pageName, this.openPage)
                .subscribe(moduleData =>{this.displayNewObject=moduleData;
                 // this.objectName=this.displayNewObject[0].objectName[0].objectName
              this.objectName=this.displayNewObject[0].objectName
              console.log(this.displayNewObject) ;
               this.hideObjectData=this.displayNewObject
             });

             ;},2000)


      }
// ll(){
  
//   this.pageName=sessionStorage.getItem('pageName');
//   setInterval(()=> {
//   this.openPage=sessionStorage.getItem('openPageName');
//  console.log(this.openPage+"kkk")
//  ;},2000)
//  sessionStorage.setItem('openPageName',"");
//   this.selectedPageName=sessionStorage.getItem('selectedPageName');
// }

      objectData(name,value,url,locators){

    
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('name', name);
        urlSearchParams.append('value', value);
        urlSearchParams.append('url', url);
        urlSearchParams.append('locators', locators);
        urlSearchParams.append('objectName',this.objectName);
        urlSearchParams.append('pageName',this.selectedPageName);

         setInterval(()=> {
         this.ngOnInit() ;},1000); 
            return this.http.post('http://localhost:2111/objectTestName', urlSearchParams)
        //>>>>>>> f40691273c2e1609e48105331b3acaacee43b64b
              .subscribe(data => {
              console.log(data);
            });



      }


}
