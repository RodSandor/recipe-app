import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  { path:'', component: RecipesComponent, children: [
    { path:'', component: RecipeEditComponent },
    { path:'new', component: RecipeEditComponent },
    { path:':id', component: RecipeDetailsComponent },
    { path:':id/edit', component: RecipeEditComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
