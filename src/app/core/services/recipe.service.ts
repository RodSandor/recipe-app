import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

import { Recipe } from './../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'Lorem Ipsum',
      'https://media.istockphoto.com/photos/slice-of-pizza-isolated-on-white-background-picture-id1295596568?b=1&k=20&m=1295596568&s=170667a&w=0&h=iYtQ3yZhbJ7Qo_qFpZDN3KIJ5zkhiJGqo2OjL6aHyzE=',
      [
        new Ingredient('lorem', 5)
      ]
      ),
    new Recipe(
      'The Best Recipe',
      'Lorem Ipsum',
      'https://media.istockphoto.com/photos/snacks-hamburger-isolated-on-white-background-picture-id635875304?b=1&k=20&m=635875304&s=170667a&w=0&h=cRx1kKLLb81d0YMfDWKj3ZE6HY-9Ls56_F_DfKsbtpE=',
      [
        new Ingredient('lorem', 5)
      ]
      ),
    new Recipe(
      'Another Recipe',
      'Lorem Ipsum',
      'https://media.istockphoto.com/photos/ham-sandwich-picture-id157428028?b=1&k=20&m=157428028&s=170667a&w=0&h=X8N6KX7An1IPFe0rIGIauDHUOsMOZPWM7ESplenn-gE=',
      [
        new Ingredient('lorem', 5)
      ]
      ),
    new Recipe(
      'Beast Recipe',
      'Lorem Ipsum',
      'https://media.istockphoto.com/photos/veal-or-chicken-milanese-sandwich-picture-id157510804?b=1&k=20&m=157510804&s=170667a&w=0&h=M2xZLVdsc2wzc-9mWhz7z0Q2Wjq46dr2IK3PjV6WmqA=',
      [
        new Ingredient('lorem', 5)
      ]
      ),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }


}
