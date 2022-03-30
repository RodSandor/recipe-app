import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, throwError, tap, BehaviorSubject } from 'rxjs';

import { environment } from './../../../../environments/environment.prod';
import { AuthResponseData } from './../../models/auth-response';
import { User } from './../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user = new BehaviorSubject<User>(null);
  private tokenExpirationTimer: any;


  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${ environment.firebase.api_key }`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuth(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${ environment.firebase.api_key }`,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    )
    .pipe(
      catchError(this.handleError),
      tap(resData => {
        this.handleAuth(
          resData.email,
          resData.localId,
          resData.idToken,
          +resData.expiresIn
        );
      })
    );
  }

  autoLogin() {
   const userData: {
    email: string,
    id:string,
    _token: string,
    _tokenExpirationDate: Date
  } = JSON.parse(localStorage.getItem('userData'));
   if (!userData) {
     return;
   }

   const loadedUser = new User(
     userData.email,
     userData.id,
     userData._token,
     new Date(userData._tokenExpirationDate)
   );

   if (loadedUser.token) {
     this.user.next(loadedUser);
     const expirationDuration =
      new Date(userData._tokenExpirationDate).getTime() -
      new Date().getTime();
    this.autologout(expirationDuration);
   }
  }

  signout() {
    this.user.next(null!);
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/login']);
    localStorage.removeItem('userData');
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  }

  autologout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(()=>{
      this.logout();
    }, expirationDuration)
  }

  private handleAuth(email: string, userId:string, token: string, expiresIn: number) {
    const expirationDate = new Date(new Date().getTime() + expiresIn*1000);
        const user = new User(
          email,
          userId,
          token,
          expirationDate
        );
        this.user.next(user);
        localStorage.setItem('userData', JSON.stringify(user));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMsg = 'An unkown error occured';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(()=>errorMsg);
    } else {
      switch(errorRes.error.error.message) {
        case 'EMAIL_EXISTS':
          errorMsg = 'Email already exists';
          break
        case 'EMAIL_NOT_FOUND':
          errorMsg = 'Email does not exists';
          break
        case 'INVALID_PASSWORD':
          errorMsg = 'Invalid password';
          break
      }
    }

    return throwError(()=>errorMsg);
  }
}
