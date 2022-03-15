import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes.component';
import { RecipeItemComponent } from './components/recipe-item/recipe-item.component';



@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeEditComponent,
    RecipeDetailsComponent,
    RecipesComponent,
    RecipeItemComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RecipeDetailsComponent,
    RecipeListComponent,
    RecipeEditComponent,
    RecipesComponent,
  ]
})
export class RecipesModule { }
