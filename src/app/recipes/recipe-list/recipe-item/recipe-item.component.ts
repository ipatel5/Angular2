import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipe;    /* variable is what we defined in recipe-item.html and type is "Recipe" */






constructor(private receipeService: RecipeService) { }  

  ngOnInit() {
  }

  itemClicked()  {
    this.receipeService.recipeSelected.emit(this.recipe);
  }
  }
