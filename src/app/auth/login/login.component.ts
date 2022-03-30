import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs';

import { AuthService } from './../../core/services/http/auth.service';
import { AuthResponseData } from './../../core/models/auth-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoggedIn = true;
  isLoading = false;
  error: string;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if(!form.valid) {
      return;
    }
    const email = form.value.email;
    const pass = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if (this.isLoggedIn) {
      authObs = this.authService.login(email, pass)
    } else {
      authObs = this.authService.signup(email, pass)
    }

    authObs.subscribe(
      resData => {
      this.isLoading = false;
      this.router.navigate(['/recipes']);
    },
      errorMsg => {
        console.log(errorMsg);
        this.error = errorMsg;
        this.isLoading = false;
    })

    form.reset();
  }

  onSwitchMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
