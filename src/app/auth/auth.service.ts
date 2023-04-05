import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environments} from "../../environments/environments";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {

  }
  public logIn(email:string , password:string) :void{
    let body:any = {
      "email":email,
      "password":password
    }
   this.httpClient.post(`${environments.apiURL}/api/auth/login`,body );
}
  public register(username:string, email:string , password:string, reTypePassword:string):void{
    let body:any = {
      "email":email,
      "password":password,
      "reTypePassword":reTypePassword
    }
    this.httpClient.post(`${environments.apiURL}/api/auth/register`,body );
  }
}

