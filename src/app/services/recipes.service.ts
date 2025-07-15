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
}
// https://www.youtube.com/watch?v=mozXKdC2UdQ&list=PLzA2VyZwsq_9cD3JIxBymaIVyef07PJ-y&index=32
// min 19.13
