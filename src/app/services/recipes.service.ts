import { Injectable } from '@angular/core';
import Recipe from '../../models/Recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes: Recipe[];
  constructor() {
    this.recipes = [
      {
        name_recipe: 'Pollo al limón',
        name_bd: 'salmon',
        id_recipe: 1,
        like_recipe: 12,
      },
      {
        name_recipe: 'Pollo al horno',
        name_bd: 'pure-calabacin',
        id_recipe: 2,
        like_recipe: 13,
      },
      {
        name_recipe: 'Ensalada César',
        name_bd: 'manzana',
        id_recipe: 3,
        like_recipe: 16,
      },
      {
        name_recipe: 'Tortilla de patatas',
        name_bd: 'chuleta-cerdo',
        id_recipe: 4,
        like_recipe: 19,
      },
    ];
  }

  setName(id: number, newText: string) {
    const setRecipe = this.recipes.find((recipe) => recipe.id_recipe === id);
    if (!setRecipe) return;

    setRecipe.name_recipe = newText;
    
  }

  setLike(id: number) {
    const setRecipe = this.recipes.find((recipe) => recipe.id_recipe === id);
    if (!setRecipe) return;

    setRecipe.like_recipe = setRecipe.like_recipe+1;
  }
}
