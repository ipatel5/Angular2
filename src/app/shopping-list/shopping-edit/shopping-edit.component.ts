import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
   /* @Input() ingredients: Ingredient[]= []; */
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

 
  constructor (private shoppinglistservice: ShoppingListService) {}

  ngOnInit() {
  }
  onAdd() {
  const ingName = this.nameInputRef.nativeElement.value;
  const ingAmount = this.amountInputRef.nativeElement.value;
  const newIngredient = new Ingredient(ingName, ingAmount);
this.shoppinglistservice.addIngredient(newIngredient);

 /*    this.ingredients.push(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
    console.log('nameInputRef'); */
  }

}
