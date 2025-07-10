import { Component, OnInit } from '@angular/core';
import { RecipesService } from '../../services/recipes.service';
import Recipe from '../../../models/Recipe';

@Component({
  selector: 'app-carousel',
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  recipe:Recipe = {
    name_recipe: '',  
    name_bd: '',
    id_recipe: 0, 
  };
  constructor(public recipesService: RecipesService) {}

  ngOnInit(): void {
    this.getRandomRecipeId()
  }

  

  // el carrousel saca fotos aleatorias paso un id_recipe(es un um aleatorio) y obtengo el nombre de la receta el array de nombre esta en recipesServices
  getRandomRecipeId() {
    const randomIndex = Math.floor(
      Math.random() * this.recipesService.recipes.length
    );
    this.recipe = this.recipesService.recipes[randomIndex];
  }
}
