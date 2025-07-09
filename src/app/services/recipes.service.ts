import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
recipes = [
    { name_recipe: 'Pollo al limón', id_recipe: 1 },
    { name_recipe: 'Pollo al horno', id_recipe: 2 },
    { name_recipe: 'Ensalada César', id_recipe: 3 },
    { name_recipe: 'Tortilla de patatas', id_recipe: 4 },
  ];
  constructor() { }
}
