import { Component, OnInit } from '@angular/core';

import { AuthService } from './core/services/http/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'recipe-app';

  constructor(
    private authServ: AuthService
  ) {}

  ngOnInit(): void {
    this.authServ.autoLogin();
  }
}
