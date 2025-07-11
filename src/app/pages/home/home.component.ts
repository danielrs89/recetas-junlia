import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import Recipe from '../../../models/Recipe';
import { RecipesService } from '../../services/recipes.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CarouselComponent,FormsModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'Las recetas de Junlia';
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
