import { Component, OnInit, Input } from '@angular/core';

import { RecipeService } from './../../../../core/services/recipe.service';
import { Recipe } from './../../../../core/models/recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private RecipeService: RecipeService,
  ) { }

  ngOnInit(): void {
  }

}
