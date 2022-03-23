import { AuthResponseData } from './../../models/auth-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from './../../../../environments/environment.prod';
import { catchError, throwError } from 'rxjs';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
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
      catchError(errorRes => {
        let errorMsg = 'An unkown error occured';

        if (!errorRes.error || !errorRes.error.error) {
          return throwError(errorMsg);
        } else {
          switch(errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
              errorMsg = 'Email already exists';
          }
        }

        return throwError(errorMsg);
      })
    );
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${ environment.firebase.api_key }`,
      {
        email: email,
        password: password
      }
    )
  }
}
