import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    public formBuilder: FormBuilder, 
    private router: Router,
    private loginService: LoginService
    ) {}

  loginForm: FormGroup;

  ngOnInit():void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }

  get dadosForm(){
    return this.loginForm.controls;
  }

  loginUser(){
    this.loginService
      .login(
        this.dadosForm["email"].value, 
        this.dadosForm["password"].value,
        this.dadosForm["rememberMe"].value
      ).subscribe(
      token => {
        this.router.navigate(['/dashboard']);
      },
      err => {
        alert('Ocorreu um erro ao tentar logar');
      }
    )
  }

  onForgotPasswordClick() {
    this.loginService
    .forgotPassword(
      this.dadosForm["email"].value
      ).subscribe(
            response => {
                alert(response);
            },
            error => {
                alert('Ocorreu um erro ao solicitar a redefinição de senha.');
            }
      );
  }
}
