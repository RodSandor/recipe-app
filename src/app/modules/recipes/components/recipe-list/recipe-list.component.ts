import { Component, OnInit } from '@angular/core';

import { Recipe } from './../../../../core/models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Lorem Ipsum', ''),
    new Recipe('The Best Recipe', 'Lorem Ipsum', ''),
    new Recipe('Another Recipe', 'Lorem Ipsum', ''),
    new Recipe('Beast Recipe', 'Lorem Ipsum', ''),
    new Recipe('Champion recipe', 'Lorem Ipsum', ''),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
