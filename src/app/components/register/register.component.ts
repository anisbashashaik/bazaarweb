import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  title = 'Register Component';
  posts : any;
  validateForm!: FormGroup;
  isSpinning = false;
   control: any;

  constructor(private fb: FormBuilder, private authService: AuthService) {

   }

  
  confirmationValidator = (control:FormControl): {[s:string]: boolean} => {
    if(!control.valid) {
      return { 
        required: true
      }
    }else if (control.value !== this.validateForm.controls['password'].value) {
      return {confirm: true, error: true}
    }
    return {

    }
  }
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      emailId: [null, [Validators.email]],
      password: [null, [Validators.required]]
  })}

  register(){
    console.log(this.validateForm.value);
    this.authService.register(this.validateForm.value).subscribe(

      (response) => { this.posts = response; },
      (error) => { console.log(error);  }
    );
  }

}
