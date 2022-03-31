import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ShoppingListService } from './../../core/services/shopping-list.service';
import { Ingredient } from './../../core/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ ingredients: Ingredient[] }>;
  igChange$: Subscription;

  constructor(
    private slService: ShoppingListService,
    private store: Store<{ shoppingList: { ingredients: Ingredient[] } }>
  ) {}

  ngOnInit(): void {
    this.ingredients = this.store.select('shoppingList');
    // this.ingredients = this.slService.getIngredients();
    // this.igChange$ = this.slService.ingredientsChanged.subscribe(
    //   (ingredients: Ingredient[]) => {
    //     this.ingredients = ingredients;
    //   }
    // );
  }

  onIngredientsAdded(ingredient: Ingredient) {
    // this.ingredients.push(ingredient);
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  onDelete(index: number) {
    this.slService.deleteIngredient(index);
  }

  ngOnDestroy(): void {
    // this.igChange$.unsubscribe();
  }
}
