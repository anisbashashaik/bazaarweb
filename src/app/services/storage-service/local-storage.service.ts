import { Injectable } from '@angular/core';

const TOKEN = "I_token";
const USERID = "I_userid";
const USERROLE = "I_role";
const USER = {};

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {


  constructor() { }

  saveUserId(userId: any){
    window.localStorage.removeItem(USERID);
    window.localStorage.setItem(USERID, userId);

  }

  saveUserRole(role: any){
    window.localStorage.removeItem(USERROLE);
    window.localStorage.setItem(USERROLE, role);

  }

  saveToken(token: any){
    window.localStorage.removeItem(TOKEN);
    window.localStorage.setItem(TOKEN, token);

  }

  static getToken(): string {

    const tokenStr = localStorage.getItem(TOKEN);
    console.log("getToken method:"+tokenStr);
    return tokenStr !== null ? (tokenStr) : "";
  }



  static hasToken(){
    if(this.getToken() == null){
      return false;
    }
    return true;
  }



  static getUserRole() : string {

    const userRoleStr = localStorage.getItem(USERROLE);
    console.log("getToken method userRoleStr:"+userRoleStr);
    return userRoleStr !== null ? (userRoleStr) : "";   
  }

  static isUserLoggedIn(): boolean{
    if(this.getToken() == null){
      return false;
    }
    console.log("isUserLoggedIn method");
    const role : string = this.getUserRole();
    console.log("role: "+ role);
    return role == "User";

  }

  static isAdminLoggedIn() : boolean {
    if(this.getToken() == null){
      return false;
    }
    console.log("isAdminLoggedIn method");
    const role : string = this.getUserRole();
    console.log("role: "+ role);
    return role == "Admin";
  }

  static signOut(){
    window.localStorage.removeItem(TOKEN);
    window.localStorage.removeItem(USERID);
    window.localStorage.removeItem(USERROLE);
  }
}
