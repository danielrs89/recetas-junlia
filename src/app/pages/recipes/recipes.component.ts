import { Component } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import { RecipeCardComponent } from "../../components/recipe-card/recipe-card.component";

@Component({
  selector: 'app-recipes',
  imports: [RecipeCardComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  constructor(public recipesServices: RecipesService) {}
}
