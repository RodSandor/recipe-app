import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AuthInterceptorService } from './core/interceptors/auth-interceptor.service';
import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ShoppingListService } from './core/services/shopping-list.service';
import { RecipesModule } from './modules/recipes/recipes.module';
import { RecipeService } from './core/services/recipe.service';
import { LoginComponent } from './auth/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './shared/components/alert/alert.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    LoginComponent,
    LoaderComponent,
    AlertComponent,
  ],
  imports: [
    ShoppingListModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,

    RecipesModule,
    BrowserModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    ShoppingListService,
    RecipeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
