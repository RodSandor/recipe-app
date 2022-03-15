import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';



@NgModule({
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingEditComponent,
    ShoppingListComponent
  ]
})
export class ShoppingListModule { }
