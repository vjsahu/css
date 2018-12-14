import { Component ,OnInit,OnDestroy} from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs';

import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {Post} from './post';
import{ObjectServiceComponent} from './object.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
   selector: 'app-object',
 
  templateUrl:'./html/object.component.html',

providers:[ObjectServiceComponent]
   //styleUrls: ['./pDetail.component.css'],

       

})//componrnt  closing

export class ObjectComponent implements OnInit  {

    pageName=[]
    clearMenu:boolean
    displayObjectName:string  
    constructor(private http:Http, private sendObject:ObjectServiceComponent,private router: Router) {
 
 

 
    }
 
    hideData:any
    dd:any
      ngOnInit(){
   
//alert(  this.clearMenu)

        

      setInterval(()=> {
         //this.displayPageName() 
        
        
          this.sendObject.getObjectDetails()
        .subscribe(moduleData =>{this.pageName=moduleData;
        console.log(this.pageName[0].objectName);this.hideData=this.pageName[0].objectName;this.dd=this.pageName[0].objectName[0];
    
      
      
      });
   
        
        
     ;},5000); 

 

        var toggler = document.getElementsByClassName("caret");
        var i;
        
        for (i = 0; i < toggler.length; i++) {
          toggler[i].addEventListener("click", function() {
            this.parentElement.querySelector(".nested").classList.toggle("active");
             this.parentElement.querySelector(".ested").classList.toggle("active");
            this.classList.toggle("caret-down");
          });
        }
     



        


      
         var notepad = document.getElementById("notepad");
        notepad.addEventListener("contextmenu",function(event){
            event.preventDefault();
            var ctxMenu = document.getElementById("ctxMenu");
            ctxMenu.style.display = "block";
            ctxMenu.style.left = (event.pageX - 10)+"px";
            ctxMenu.style.right = (event.pageX - 70)+"px";
            ctxMenu.style.top = (event.pageY - 140)+"px";
        },false);
        notepad.addEventListener("click",function(event){
            var ctxMenu = document.getElementById("ctxMenu");
            ctxMenu.style.display = "";
            ctxMenu.style.left = "";
            ctxMenu.style.top = "";
        },false);
      
        var pad = document.getElementById("pad");
        pad.addEventListener("contextmenu",function(event){
            event.preventDefault();
            var ctxMenu = document.getElementById("enu");
            ctxMenu.style.display = "block";
            ctxMenu.style.left = (event.pageX - 0)+"px";
            ctxMenu.style.right = (event.pageX - 0)+"px";
            // ctxMenu.style.top = (event.pageY -300)+"px";
            // ctxMenu.style.right = (event.pageX - 400)+"px";
             ctxMenu.style.top = (event.pageX - 100)+"px";
        },false);
        pad.addEventListener("click",function(event){
            var ctxMenu = document.getElementById("enu");
            ctxMenu.style.display = "";
            ctxMenu.style.left = "";
            ctxMenu.style.top = "";
        },false);
       

    
     
 

      }

   

//       displayPageName(){
//    this.sendObject.getObjectDetails()
//         .subscribe(moduleData =>{this.pageName=moduleData;
//         console.log(this.pageName[0].objectName);this.hideData=this.pageName[0].objectName ;console.log(this.hideData)});


// }

gg(fff){
 // alert(fff)
  sessionStorage.setItem('openPageName',fff);
//alert(fff)
}


      openPerticularPage:boolean
      // createNewObject(){
      //     this.createObj=true
          
      // }
      openPage:string
      openObject(page){
       // alert(dd)
this.openPage=page
this.openPerticularPage=true
sessionStorage.setItem('pageName',page);
      }
    displayPage:boolean;
  
      landCreatePage(){
this.clearMenu=false
     this.displayPage=true
        //alert(this.rr)
       // this.router.navigate(['landNewPage']);
      }
      displayObject:boolean;
      createObject(selectedPageName){
      //alert(ff)
        sessionStorage.setItem('selectedPageName',selectedPageName);
        this.displayObject=true 
      }





    
    //   displayNewObject=[];
    //   saveObject(nameObject,valueObject,url,radio){

    //  // alert(radio)
    //   let urlSearchParams = new URLSearchParams();
    //   urlSearchParams.append('nameObject',nameObject);
    //   urlSearchParams.append('valueObject',valueObject);
    //   urlSearchParams.append('url',url);
    //   // alert(gitClone)
    //     return this.http.post('http://localhost:2111/totalObject',urlSearchParams)
    //          .map(response => response.json())
    //          .subscribe(data => {data;this.ngOnInit()
  
    //    });
    
    // }



}
