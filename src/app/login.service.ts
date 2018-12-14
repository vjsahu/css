import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';

import { Observable } from 'rxjs';

@Injectable()


export class LoginServiceComponent {

 
 constructor(private _http:Http){


 }
 getUserNamePassword(userNameDetails,passwordDetails){
  var loginCredential=userNameDetails+","+passwordDetails;
 
 return this._http.get("http://localhost:2111/myloginDetails"+loginCredential)
 .map((response:Response)=>response.json());

 }
}
