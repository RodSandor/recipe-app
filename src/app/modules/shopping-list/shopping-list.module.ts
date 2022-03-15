import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingEditComponent } from './components/shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [
    ShoppingListRoutingModule,
    CommonModule,
    FormsModule,
  ]
})
export class ShoppingListModule { }
