import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../storage-service/local-storage.service';

const BASIC_URL = environment["BASIC_URL"] ;
const AUTH_HEADER = "authorization";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private storageService: LocalStorageService) { }

  register(signupDTO: any): Observable<any>{
    return this.http.post(BASIC_URL + "sign-up", signupDTO);
  }

  login(username:string, password: string): any {


    return this.http.post<[]>(BASIC_URL + "authenticate", {username, password},
      {observe: 'response'}
    )
    .pipe(
      tap(_=> this.log("User Authentication")),
      map((res:HttpResponse<any>) => {
              this.storageService.saveUserId((res.body.userId));
              this.storageService.saveUserRole(res.body.role);
              console.log("res : ", res);
              //this.storageService.saveUser({ 'userId' : res.body.userId, 'role' : res.body.role});
              let authentication = res.headers.get(AUTH_HEADER);
              console .log("authentication"+ authentication);
              if(authentication != null){
                const tokenLength = authentication.length;
                const bearerToken = authentication.substring(7,tokenLength);
                this.storageService.saveToken(bearerToken);
              }
              return res;
    }));

  }

  log(message: string): void {
    console.log(`User Auth Service: ${message}`);
  }
}
