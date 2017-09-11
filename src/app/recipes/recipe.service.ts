import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected= new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('Orange Chicken', 'A Super tasty Orange chicken from Panda Express',
            'http://img.sndimg.com/food/image/upload/h_420,w_560,c_fit/v1/img/recipes/10/32/15/pic7atxk2.jpg',
        [
            new Ingredient('meat', 4),
            new Ingredient('fries', 20)
        ]
        ),

        new Recipe('The Indian Curry', 'this is best dish of North India',
        'https://sparkpeo.hs.llnwd.net/e2/guid/traditional-indian-chicken-curry/d79acb18-cc99-4f84-845e-e3963e520840.jpg',
            [
                new Ingredient('panner', 10),
                new Ingredient('red chilli', 2)
            ])
    ];
constructor(private shoppinglistservice: ShoppingListService){}
    getRecipes() {
       return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.shoppinglistservice.addIngredients(ingredients);
    }
}