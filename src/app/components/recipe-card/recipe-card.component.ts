import { Component, input } from '@angular/core';
import Recipe from '../../../models/Recipe';
import { RecipesService } from '../../services/recipes.service';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  recipe = input<Recipe>();

  constructor(public recipeService: RecipesService) {}

  setName(id: number | undefined, event: Event) {
    if (!id) return;
    const inputHtml = event.target as HTMLInputElement;

    this.recipeService.setName(id, inputHtml.value);
  }
  
  setLike(id: number | undefined) {
    if (!id) return;
    this.recipeService.setLike(id);
  }
}
