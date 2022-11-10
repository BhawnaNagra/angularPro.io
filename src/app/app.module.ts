import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './header/recipes/recipes.component';
import { RecipesDetailsComponent } from './header/recipes/recipes-details/recipes-details.component';
import { RecipesListComponent } from './header/recipes/recipes-list/recipes-list.component';
import { RecipesItemComponent } from './header/recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './header/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './header/shopping-list/shopping-edit/shopping-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesDetailsComponent,
    RecipesListComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
