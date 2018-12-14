import { Component ,OnInit,OnDestroy} from '@angular/core';

import { Http,Response , Headers} from '@angular/http';

import { Observable } from 'rxjs';

import { URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {Post} from './post';
import{ObjectServiceComponent} from './object.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
   selector: 'app-pagename',
 
  templateUrl:'./html/pageName.component.html',


   //styleUrls: ['./pDetail.component.css'],

       

})//componrnt  closing

export class PageNameComponent implements OnInit  {
  
    pageName:string;
    image:string;
    clearHtml:boolean
    // displayPageName:any=[]
    constructor(private http:Http) {
  //alert("jjj")

 
}

ngOnInit(){

}

  
  
    
      savePageDetails(pageName,image){
        
         this.clearHtml=true
        sessionStorage.setItem('RefreshPageName','RefreshPageName');
       this.pageName=""
        this.image=""
       // alert(pageName+image)
       let urlSearchParams = new URLSearchParams();
       urlSearchParams.append('pageName',pageName);
       urlSearchParams.append('image',image);
       urlSearchParams.append('projectId',"1");
   //console.log(urlSearchParams)
         return this.http.post('http://localhost:2111/totalObject',urlSearchParams)
              .map(response => response.json())
              .subscribe(data => {data
   
        });   
     
    
    }

}
