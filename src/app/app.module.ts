import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { RecipesModule } from './modules/recipes/recipes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    ShoppingListModule,
    AppRoutingModule,
    RecipesModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
