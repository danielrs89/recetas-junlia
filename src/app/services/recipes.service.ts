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
        id_recipe: 1,
        name_recipe: 'Salmón a la plancha',
        name_bd: 'salmon',
        like_recipe: 0,
        tiempo: '20 minutos',
        ingredientes: {
          raciones: 2,
          ingrediente: ['salmon', 'sal', 'pimienta', 'aceite de oliva'],
        },
        pasos: [
          'Precalentar una sartén a fuego medio-alto.',
          'Sazonar los filetes de salmón con sal y pimienta al gusto.',
          'Añadir un poco de aceite de oliva a la sartén caliente.',
          'Colocar los filetes de salmón en la sartén y cocinar durante 4-5 minutos por cada lado, o hasta que estén dorados y cocidos al punto deseado.',
          'Retirar el salmón de la sartén y dejar reposar durante unos minutos antes de servir.',
          'Servir caliente con tus guarniciones favoritas, como verduras al vapor o arroz.',
          'Disfrutar de un delicioso salmón a la plancha.',
        ],
      },
      {
        id_recipe: 2,
        name_recipe: 'Pure de calabacín',
        name_bd: 'pure-calabacin',
        like_recipe: 0,
        tiempo: '20 minutos',
        ingredientes: {
          raciones: 2,
          ingrediente: [
            'calabacin',
            'aceite de oliva',
            'sal',
            'pimienta',
            'ajo',
          ],
        },
        pasos: [
          'Lavar y pelar los calabacines.',
          'Cortar los calabacines en trozos pequeños.',
          'Cocinar los calabacines en agua hirviendo con sal durante 10-15 minutos, o hasta que estén tiernos.',
          'Escurrir los calabacines y triturarlos con un tenedor',
          'Añadir aceite de oliva, sal, pimienta y ajo al gusto.',
          'Mezclar bien hasta obtener un puré suave.',
          'Servir caliente como acompañamiento o plato principal.',
        ],
      },

      {
        id_recipe: 3,
        name_recipe: 'Manzana asada',
        name_bd: 'manzana',
        like_recipe: 0,
        tiempo: '20 minutos',
        ingredientes: {
          raciones: 2,
          ingrediente: ['manzana', 'canela', 'azúcar', 'mantequilla'],
        },
        pasos: [
          'Precalentar el horno a 180°C.',
          'Lavar y descorazonar las manzanas.',
          'Colocar las manzanas en una bandeja para hornear.',
          'Espolvorear canela y azúcar sobre las manzanas.',
          'Añadir un trozo pequeño de mantequilla en la parte superior de cada manzana.',
          'Hornear durante 20-25 minutos, o hasta que las manzanas estén tiernas y caramelizadas.',
          'Servir caliente como postre o merienda.',
        ],
      },

      {
        id_recipe: 4,
        name_recipe: 'Chuleta de cerdo',
        name_bd: 'chuleta-cerdo',
        like_recipe: 0,
        tiempo: '20 minutos',
        ingredientes: {
          raciones: 2,
          ingrediente: [
            'chuleta de cerdo',
            'sal',
            'pimienta',
            'ajo en polvo',
            'aceite de oliva',
          ],
        },
        pasos: [
          'Sazonar las chuletas de cerdo con sal, pimienta y ajo en polvo al gusto.',
          'Calentar una sartén grande a fuego medio-alto y añadir un poco de aceite de oliva.',
          'Cocinar las chuletas de cerdo durante 4-5 minutos por cada lado, o hasta que estén doradas y cocidas al punto deseado.',
          'Retirar las chuletas de la sartén y dejarlas reposar durante unos minutos antes de servir.',
          'Servir caliente con tus guarniciones favoritas.',
        ],
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

    setRecipe.like_recipe = setRecipe.like_recipe + 1;
  }
}
