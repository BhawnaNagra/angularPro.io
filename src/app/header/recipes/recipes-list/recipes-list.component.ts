import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipes[] = [
    new Recipes('Test Recipe', 'test desription', 'https://img.bestrecipes.com.au/GmWTemLJ/w643-h428-cfill-q90/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg'),
    new Recipes('Test Recipe', 'test desription', 'https://img.bestrecipes.com.au/GmWTemLJ/w643-h428-cfill-q90/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
