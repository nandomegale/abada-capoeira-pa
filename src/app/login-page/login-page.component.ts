import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public email = new FormControl('', [Validators.required, Validators.email]);
  public password = new FormControl('', [Validators.required]);

  getEmailErrorMessage() {
    if (this.email.hasError('required')) return 'campo obrigatório';
    if (this.email.hasError('email')) return 'não é um email válido';
    else return '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'campo obrigatório' : '';
  }

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  logar() {
    if (this.email.value == 'admin' && this.password.value == 'admin123') {
      this._router.navigateByUrl('/home');
    }
  }
}
