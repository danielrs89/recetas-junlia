import { Component, input } from '@angular/core';
import Recipe from '../../../models/Recipe';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  recipe = input<Recipe>();
}
