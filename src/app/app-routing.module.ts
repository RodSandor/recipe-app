import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ShoppingListComponent } from './modules/shopping-list/components/shopping-list/shopping-list.component';
import { RecipesComponent } from './modules/recipes/recipes.component';

const routes: Routes = [
  {
    path: 'recipes',
    loadChildren: () => import('./modules/recipes/recipes.module').then(m => m.RecipesModule)
  },
  {
    path: 'shopping-list',
    loadChildren: () => import('./modules/shopping-list/shopping-list.module').then(m => m.ShoppingListModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
