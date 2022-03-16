import { Component, OnInit } from '@angular/core';

import { RecipeService } from './../../core/services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: []
})
export class RecipesComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
