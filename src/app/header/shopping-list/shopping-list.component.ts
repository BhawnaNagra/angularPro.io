import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  Ingredients:Ingredients[]=[
    new Ingredients('Apple',5),
    new Ingredients('Corn',5),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
