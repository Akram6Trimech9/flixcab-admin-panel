import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../cors/services/auth.service';
import { CurrentUserService } from '../cors/services/current-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder ,private  _authService: AuthService, private _router : Router  , private _current : CurrentUserService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
  message : string = ''
  onSubmit(): void {
    this.submitted = true;
     this._authService.login(this.form.value).subscribe({ 
      next:(res)=> { 
        if(res.accessToken){
           this._current.setCurrentUser()
          this._router.navigateByUrl('')

        }
       } ,
      error:(error :any)=> { 
         this.message=  error.message
       }
     })
    if (this.form.invalid) {
      return;
    }

   }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
