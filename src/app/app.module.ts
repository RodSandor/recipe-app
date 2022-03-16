import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { ShoppingListModule } from './modules/shopping-list/shopping-list.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { ShoppingListService } from './core/services/shopping-list.service';
import { RecipesModule } from './modules/recipes/recipes.module';
import { RecipeService } from './core/services/recipe.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
  ],
  imports: [
    ShoppingListModule,
    HttpClientModule,
    AppRoutingModule,

    RecipesModule,
    BrowserModule,
  ],
  providers: [ShoppingListService, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
