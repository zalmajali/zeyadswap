import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private baseUrl = "https://admin.eswapco.com/api";
  public result:any;
  constructor(private http:HttpClient) {
  }
  async aboutApp(){
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/'+"about").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async checkIfLoginApi(){
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/'+"checkIfLogin").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async checkRegistrationApi(){
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/'+"checkRegistration").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async newNotifications(userId:any){
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/'+"newNotifications"+"/"+userId).subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async allNotifications(userId:any,limit:any){
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/'+"allNotifications"+"/"+userId+"/"+limit).subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async checkIfSiteWorkApi(){
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/'+"checkIfSiteWork").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async policyApp(){
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/'+"policy").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async deleteAccount(userId:any){
    return new Promise(resolve => {
      this.http.post(this.baseUrl+'/'+"deleteAccount"+"/"+userId,"").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async contactUs(fullName:any,number:any,msg:any){
    return new Promise(resolve => {
      this.http.post(this.baseUrl+'/'+"contactUs"+"/"+fullName+"/"+number+"/"+msg,"").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async registration(number:any,invitation:any=0,password:any,code:any){
    return new Promise(resolve => {
      this.http.post(this.baseUrl+'/'+"registration"+"/"+number+"/"+invitation+"/"+password+"/"+code,"").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async updateAccount(userId:any,catIdUser:any,subCatIdUser:any,cityId:any,regionId:any,userName:any,commercialName:any,serviceDetails:any){
    return new Promise(resolve => {
      this.http.post(this.baseUrl+'/'+"updateAccount"+"/"+userId+"/"+catIdUser+"/"+subCatIdUser+"/"+cityId+"/"+regionId+"/"+userName+"/"+commercialName+"/"+serviceDetails,"").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async updateData(userId:any,catIdUser:any,subCatIdUser:any,cityId:any,regionId:any,userName:any,commercialName:any,serviceDetails:any,type:any){
    return new Promise(resolve => {
      this.http.post(this.baseUrl+'/'+"updateData"+"/"+userId+"/"+catIdUser+"/"+subCatIdUser+"/"+cityId+"/"+regionId+"/"+userName+"/"+commercialName+"/"+serviceDetails+"/"+type,"").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async forgotPassword(number:any,code:any){
    return new Promise(resolve => {
      this.http.post(this.baseUrl+'/'+"forgotPassword"+"/"+number+"/"+code,"").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async activationUser(userId:any,activeCode:any){
    return new Promise(resolve => {
      this.http.post(this.baseUrl+'/'+"activation"+"/"+userId+"/"+activeCode,"").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async resenData(userId:any){
    return new Promise(resolve => {
      this.http.post(this.baseUrl+'/'+"resenData"+"/"+userId,"").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async changePassword(userId:any,oldPassword:any,newPassword:any){
    return new Promise(resolve => {
      this.http.post(this.baseUrl+'/'+"changePassword"+"/"+userId+"/"+oldPassword+"/"+newPassword,"").subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async checkUser(number:any,password:any,code:any){
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/'+"checkUser"+"/"+number+"/"+password+"/"+code).subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  async information(userId:any){
    return new Promise(resolve => {
      this.http.get(this.baseUrl+'/'+"information"+"/"+userId).subscribe(data => {
        return this.result = resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
}
