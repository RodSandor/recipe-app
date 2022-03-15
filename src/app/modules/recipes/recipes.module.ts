import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';


@NgModule({
  declarations: [
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeEditComponent,
    RecipesComponent,
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule
  ]
})
export class RecipesModule { }
