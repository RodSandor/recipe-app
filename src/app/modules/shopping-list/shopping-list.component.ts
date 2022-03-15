import { ShoppingListService } from './../../core/services/shopping-list.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { Ingredient } from './../../core/models/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  igChange$: Subscription;
  ingredients: Ingredient[];

  constructor(
    private slService: ShoppingListService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.slService.getIngredients();
    this.igChange$ = this.slService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  onIngredientsAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  onDelete(index: number) {
    this.slService.deleteIngredient(index);
  }

  ngOnDestroy(): void {
    this.igChange$.unsubscribe();
  }
}
