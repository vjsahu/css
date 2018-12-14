import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Post} from './post'

@Injectable()
export class ObjectServiceComponent {

 
 constructor(public http:Http){

 }
   getObjectDetails():Observable<Post[]>{
 //	alert("ll00")
// <<<<<<< HEAD
//    return this.http.get("/importType")
// =======
   return this.http.get("http://localhost:2111/getObject")
//>>>>>>> f40691273c2e1609e48105331b3acaacee43b64b
  .map((response:Response)=><Post[]>response.json());

  }


  objectNameDetails(pageName,openPage):Observable<Post[]>{
    //	alert("ll00"+pageName)
   // <<<<<<< HEAD
   //    return this.http.get("/importType")
   // =======
   var data=pageName+","+openPage
      return this.http.get("http://localhost:2111/objectNameDetails"+data)
   //>>>>>>> f40691273c2e1609e48105331b3acaacee43b64b
     .map((response:Response)=><Post[]>response.json());
   
     }
 

}