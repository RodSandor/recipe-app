import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map, tap, toArray } from 'rxjs';

import { Recipe } from './../../models/recipe.model';
import { RecipeService } from './../recipe.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private recipesService: RecipeService,
    private http: HttpClient,
  ) {}

  storeRecipes() {
    const recipes = this.recipesService.getRecipes();
    this.http.put('https://recipe-book-e757f-default-rtdb.firebaseio.com/recipes.json', recipes)
    .subscribe();
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>('https://recipe-book-e757f-default-rtdb.firebaseio.com/recipes.json')
    .pipe(
      map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : []
          };
        });
      }),
      tap(recipes => {
        this.recipesService.setRecipes(recipes);
      })
    )
}
}
