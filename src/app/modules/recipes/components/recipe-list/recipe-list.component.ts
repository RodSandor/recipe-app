import { Component, OnInit } from '@angular/core';

import { RecipeService } from './../../../../core/services/recipe.service';
import { Recipe } from './../../../../core/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

}
