import { AuthResponseData } from './../../core/models/auth-response';
import { Observable } from 'rxjs';
import { AuthService } from './../../core/services/http/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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
    private authService: AuthService
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
