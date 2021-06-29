import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private authService: AuthService) { 
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  public login(){
    this.authService.login(this.getUserNameFormValue(), this.getPasswordFormValue()).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    );
  }

  private getUserNameFormValue() : string {
    return this.loginForm.get('username')?.value;
  }

  private getPasswordFormValue() : string {
    return this.loginForm.get('password')?.value;
  }  

}
