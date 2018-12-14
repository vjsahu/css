

import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs';

import { URLSearchParams } from '@angular/http';

import {Post} from '../post';

import 'rxjs/add/operator/map';

@Injectable()
export class TestComponent {

 
 constructor(public http:Http){


 }

 bjectNameDetails():Observable<Post[]>{
 	//alert("ll00")
     return this.http.get("http://localhost:2111/getCreateTest")
     //>>>>>>> f40691273c2e1609e48105331b3acaacee43b64b
     .map((response:Response)=><Post[]>response.json());
     
       }

  }

  




