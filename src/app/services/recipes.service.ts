import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipes = [
    {
      name_recipe: 'Pollo al limón',
      name_bd: 'salmon',
      id_recipe: 1,
    },
    {
      name_recipe: 'Pollo al horno',
      name_bd: 'pure-calabacin',
      id_recipe: 2,
    },
    {
      name_recipe: 'Ensalada César',
      name_bd: 'manzana',
      id_recipe: 3,
    },
    {
      name_recipe: 'Tortilla de patatas',
      name_bd: 'chuleta-cerdo',
      id_recipe: 4,
    },
  ];
  constructor() {}
}
