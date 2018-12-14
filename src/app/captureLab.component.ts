import { Component,OnInit} from '@angular/core';
import { Http,Response } from '@angular/http';
import { AmazingTimePickerService } from 'amazing-time-picker';
// import { ActivatedRoute, Router } from '@angular/router';
import { CaptureLabServiceComponent} from './captureLab.service';


import { Post } from './post';


// import { ConsoleReporter } from 'jasmine';
@Component({
  selector: 'app-cap',
 
  templateUrl:'./html/captureLab.html',

     providers: [CaptureLabServiceComponent],
     styleUrls: ['./app.component.scss','./css/captureLab.css']
            
     })
     

export class CaptureLabComponent implements OnInit  {
 
   devicesName:String;
   devicesId:String;
   dvc:boolean;
   result:Post[];
   deviceslength:string;
   DeviceId:String;
   fulldeviceslist:String[];
   detailObj=[]; 
   rowSelected:boolean;
   checkBox=[];
   selectedrow:string;
   idSelectedVote:string;
   indexx:number;
   yashwanth:string;
   deviceDetails:Object={};
   devicesFun:Function;
   apkPath:Object={};
   filesToUpload: Array<File>;
   devicesDetails:any;
   completepath: any;
   todaydate: any;
   currentTime: any;
   toTime: string;
   gotBlockedDevice:any;
   blockToTime:boolean;
   blockTdData:boolean;
   time:any;
   data:any;
   deviceAvailable:boolean;
   alwaysBlock:boolean;
   event:any;
   timeList: {  StartingTime: string}[];
   filtered:any;
   loginDetails:any;
   selectBookedDevices:any;
   bookedSlot:boolean;
   blockInstall:boolean;
  // unBlockFun:Function;
  
  constructor(private mobileApps:CaptureLabServiceComponent,  private atp: AmazingTimePickerService, private http:Http) {
    this.dvc=false; 
    this.filesToUpload = []; 
      }

      ngOnInit() {
        let UserName=sessionStorage.getItem('importedDetails');
        let parsedUserName=JSON.parse(UserName);
        this.loginDetails = parsedUserName;
        this.todaydate=new Date().toISOString().substr(0, 10)
        this.bookedSlot=false;
        var HH = new Date().getHours();
        var MM = "00";    
        this.currentTime = HH+":"+MM;
        this.toTime = HH+":"+MM;
        this.unBlockFun(this.loginDetails,this.currentTime,this.todaydate)
        this.blockTdData=true;
        this.blockInstall=true;
        this.timeList = [
        {  StartingTime: "01:00"},{  StartingTime: "02:00"},{  StartingTime: "03:00"},
        {  StartingTime: "04:00"},{  StartingTime: "05:00"},{  StartingTime: "06:00"},
        {  StartingTime: "07:00"},{  StartingTime: "08:00"},{  StartingTime: "09:00"},
        {  StartingTime: "10:00"},{  StartingTime: "11:00"},{  StartingTime: "12:00"},
        {  StartingTime: "13:00"},{  StartingTime: "14:00"},{  StartingTime: "15:00"},
        {  StartingTime: "16:00"},{  StartingTime: "17:00"},{  StartingTime: "18:00"},
        {  StartingTime: "19:00"},{  StartingTime: "20:00"},{  StartingTime: "21:00"},
        {  StartingTime: "22:00"},{  StartingTime: "23:00"},{  StartingTime: "24:00"}
        ]
       }
       upload() {
        this.makeFileRequest("http://localhost:2111/shivaa", [], this.filesToUpload).then((result) => {
            console.log(result);
            if(result!=0)
            {
            console.log(result[0].path);
            this.completepath = result[0].path;
            console.log(this.completepath+"this.completepath");
            console.log(result[0].filename)
            alert(result[0].filename + " Installed in" + this.completepath);

            }
        }, (error) => {
            console.error(error);
        });
    }

    fileChangeEvent(fileInput: any){
      this.filesToUpload = <Array<File>> fileInput.target.files;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();
        for(var i = 0; i < files.length; i++) {
          console.log(files[i].name)
            formData.append("uploads[]", files[i], files[i].name);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        }
        xhr.open("POST", url, true);
        xhr.send(formData);
    });
}



       ////////////////////////////////////////////

       connect(){
        this.dvc=true;
        this.mobileApps.captureLabServiceDetails(); 
        this.getMobileDevice(); 
        }

        getMobileDevice(){
          alert("Wait for a Second")
          this.mobileApps.mobileAppDetails().subscribe(mobileData => this.result = mobileData);
        }
        setClickedRow = function(i)
        {  
          this.selectedRownew = i;
        }
        bookClickedRow(devices)
        {
          this.selectBookedDevices=devices;

        }
 
      blockDevices(DevicesId,todaydate,StartingTime,endTime){
        if(endTime > StartingTime)
        {
        var userId=this.loginDetails[0].userId
        var userName = this.loginDetails[0].userName
        var blockDevicedata = DevicesId+","+todaydate+","+StartingTime+","+endTime+","+userId+","+userName;
        this.http.post('http://localhost:2111/blockDevice'+blockDevicedata,{})
          .subscribe(result =>{ this.gotBlockedDevice = result
            alert("Devices is Blocked");
            this.deviceAvailable=false; 
            this.blockTdData=true;
          });
        }
        else
        {
         alert("End Time Should be Greater than the Starting Time")
        }
      }

     somethingChanged = function(currentTime,toTime,DevicesId,todaydate)
      {
        // location.reload();
        if( currentTime <= toTime )
        {  
         this.blockToTime=false;  
         var blockeDtails = DevicesId+","+currentTime+","+toTime+","+todaydate;
         this.http.get('http://localhost:2111/checkBlockedDevice'+blockeDtails,{})
        .map((response: Response) => <Post[]>response.json())
        .subscribe(result => { 
          this.final = DevicesId;
          console.log(result);
          console.log(this.timeList);
          this.filtered = this.timeList.filter(function(a){
            var HH = new Date().getHours();
            var MM = "00";   
            var presentTime = HH+":"+MM;
            return a.StartingTime > presentTime;
           });
          for(let l=0;l<this.filtered.length;l++)
          {
            for(let m=0;m<result.length;m++)
            {
              if(this.filtered[l].StartingTime == result[m].FromTime)
              {
                this.filtered.splice(l, 1);
              }
          }
        }
          // if(result.length !=0)
          // {
          //   this.blockTdData=true;
          //   this.deviceAvailable=false;
          //   this.alwaysBlock=false;
          // }
          // else
          // {
          //   this.blockTdData=false;
          //   this.blockToTime=false;
          //   this.deviceAvailable=true;
          //   this.alwaysBlock=false;
          // }
         
        })
        }
        else
        {
          // location.reload();
          this.blockToTime=true;
          this.blockTdData=false;
        }
      }



    unBlockFun=function(loginDetails,currentTime,todaydate)
    {
      var unblockDetail = loginDetails[0].userId+","+currentTime+","+todaydate;
      this.http.get('http://localhost:2111/unBlockApi'+unblockDetail)
      .map((response: Response) => <Post[]>response.json())
        .subscribe(result => {
          console.log(result)
          for(let t=0;t<result.length;t++)
          {
            var multiupleDetail = result[t].DeviceId+","+currentTime+","+loginDetails[0].userId;
            console.log(multiupleDetail)
            this.http.get('http://localhost:2111/multipleDevUnblock'+multiupleDetail)
            .map((response:Response) => <Post[]>response.json())
            .subscribe(result9 => {
              this.bookedslot009 = result9;
              console.log(this.bookedslot009)
              if(result9.length !=0)
              {
                this.bookedSlot=true;
                // for(let r=0;r<result9.length;r++)
                // {
                // if(result[t].DeviceId == result9[r].DeviceId )
                // {
                //   this.blockTdData=false;
                // }
                // }
              }
              else
              {
                  this.bookedSlot=false;
                
              }
             
            })
          }
          

        })
      
    }

    checkFun(devicesId,value)
    {
      this.rowSelected=true;
      var numbers = {};
      numbers["devicesid"]=devicesId;
      this.detailObj.push(numbers);
      this.fulldeviceslist=this.detailObj; 
      this.blockInstall=false;    
    }
    
    installApk()
    {
      console.log(this.fulldeviceslist)
      
      var deviceslength=this.fulldeviceslist.length;
        this.devicesFun = function(y)
        {
          if(y  < deviceslength)
        {
          var obj77={};
          obj77["deviceId"]=this.fulldeviceslist[y].devicesid;
          obj77["apkPath"]=this.completepath;
          this.http.post('http://localhost:2111/installapk',obj77,{})
          .subscribe(result =>{
          console.log(result)
          alert("Apk Successfully Installed")
          });	
          this.devicesFun(y+1)
          }//ifclosingsfun
        }//closingsfun
        this.devicesFun(0);       

    }
      

   }
