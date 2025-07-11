import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { RouterLink } from '@angular/router';
import Recipe from '../../../models/Recipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchString: string = '';
  recipesFiltered: Recipe[] = [];

  constructor(private recipesService: RecipesService) {}

  searchRecipeString() {
    const string = this.searchString.toLocaleLowerCase();
    if (!string.trim()) {
      this.recipesFiltered = this.recipesService.recipes;
    } else {
      this.recipesFiltered = this.recipesService.recipes.filter((recipe) =>
        recipe.name_recipe.toLowerCase().includes(string)
      );
    }
  }

  setSearchString() {
    this.searchString = '';
  }
}
