import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from 'src/app/services/auth-service/auth.service';
import { LocalStorageService } from 'src/app/services/storage-service/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  posts : any;
  validateForm!: FormGroup;
  isSpinning = false;
  control: any;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router
    ,private notificationService: NzNotificationService
    ) { 
      
    }

  ngOnInit() {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
  })}

  login(){
    console.log("validateForm.value:"+this.validateForm.value);
    this.authService.login(this.validateForm.get(['username'])!.value, this.validateForm.get(['password'])!.value).subscribe(
      (response : any) => { 
       console.log("inside login method:"+response);
        //this.posts = response; 
        this.isSpinning = false;
        if(LocalStorageService.isAdminLoggedIn()){
          console.log ("admin logged in");
          this.router.navigateByUrl("/admin/dashboard");
        }else if(LocalStorageService.isUserLoggedIn()){
          console.log ("user logged in");
          this.router.navigateByUrl("user/dashboard");
        }
        console.log("login method completed");

      },
      (error : any) => { 
        console.log(error); 
        if(error.status == 406){
         this.notificationService.error("ERROR", "Account is not Active. Please Register first", {nzDuration: 5000});
        }else {
         this.notificationService.error("ERROR", "Bad Credentials", {nzDuration: 5000});
        }
        this.isSpinning = false;
      }      
    );    
  }

}
