import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipesResolverService } from './../../core/services/recipes-resolver.service';
import { RecipeStartComponent } from './components/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './components/recipe-edit/recipe-edit.component';
import { Authguard } from './../../core/guards/auth.guard';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
  { path:'recipes', component: RecipesComponent, children: [
    { path:'', component: RecipeStartComponent },
    { path:'new', component: RecipeEditComponent },
    { path:':id', component: RecipeDetailsComponent, resolve: [RecipesResolverService] },
    { path:':id/edit', component: RecipeEditComponent, resolve: [RecipesResolverService] },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
