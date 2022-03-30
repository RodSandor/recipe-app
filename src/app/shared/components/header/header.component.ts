import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { DataStorageService } from './../../../core/services/http/data-storage.service';
import { AuthService } from './../../../core/services/http/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuth = false;

  constructor(
    private dsService: DataStorageService,
    private authServ: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userSub = this.authServ.user.subscribe(user => {
      this.isAuth = !!user;
    });
  }

  onSaveData() {
    this.dsService.storeRecipes();
  }

  onFetchData() {
    this.dsService.fetchRecipes().subscribe();
  }

  onLogout() {
    this.authServ.signout();
    this.router.navigate(['login']);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
