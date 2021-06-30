import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public wrongUserPassword: boolean;

  constructor(private authService: AuthService, private router: Router) { 
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  get userNameControl() {
    return this.loginForm.get('username');
  }

  get passwordControl() {
    return this.loginForm.get('password');
  }

  public login(){
    this.wrongUserPassword = false;
    this.authService.login(this.getUserNameFormValue(), this.getPasswordFormValue()).subscribe(
      (response) => this.redirecToDashboard(),
      (err) => this.showInlineFormError()
    );
  }

  private getUserNameFormValue() : string {
    return this.loginForm.get('username')?.value;
  }

  private getPasswordFormValue() : string {
    return this.loginForm.get('password')?.value;
  }

  private redirecToDashboard(){
    this.router.navigate(['/dash']);
  }

  private showInlineFormError(){
    this.wrongUserPassword = true;
  }

}
