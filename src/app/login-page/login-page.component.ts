import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  public email!: string;
  public password!: string;

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  logar() {
    if (this.email == 'admin' && this.password == 'admin123') {
      this._router.navigateByUrl('/home');
    }
  }
}
