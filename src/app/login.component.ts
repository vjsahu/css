import { Component,OnInit } from '@angular/core';
//import { NgZone } from '@angular/core';

import { Router } from '@angular/router';
import {LoginServiceComponent} from './login.service';

@Component({
  selector: 'app-login',
 
  templateUrl:'./html/login.component.html',
            
           
 providers: [LoginServiceComponent],

         })//componrnt  closing

export class LoginComponent implements OnInit {
  
    userNameDetails:string ;
    passwordDetails:string ;
    loginUserDetails:any;
    constructor(private getData:LoginServiceComponent,private router: Router){

    }

       ngOnInit(){
       }

            checkLoginDetails(userNameDetails,passwordDetails)
            {
              if(userNameDetails != undefined || passwordDetails != undefined )
              {
                this.getData.getUserNamePassword(userNameDetails,passwordDetails).
                subscribe(result =>{this.loginUserDetails=result
                  if(this.loginUserDetails.length !=0)
                  {
                    sessionStorage.setItem('importedDetails',JSON.stringify(this.loginUserDetails));
                   if(userNameDetails ==this.loginUserDetails[0].userName && passwordDetails==this.loginUserDetails[0].password)
                   {
                    this.router.navigate(['/projectSelection']); 
                   }
                  }
                  else
                   {
                      alert("Incorrect Credential...!!! Please Trg Again")
                   }
                  
  
                });
              }
              else
              {
                alert("Please Fill Mandatory Fields")
              }
           }
           clearData(){
             //alert("ll")
             //alert(this.loginUserDetails.length)
             if(this.userNameDetails==undefined || this.passwordDetails==undefined){
               alert("Please Fill Mandetatory Fields")

             }
             this.userNameDetails="";
             this.passwordDetails="";

           }

}
