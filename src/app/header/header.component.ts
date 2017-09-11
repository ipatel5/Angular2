import { Component, EventEmitter , Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  })
export class HeaderComponent {
 @Output() recipeClicked =  new EventEmitter<string>();


  onSelect(feature: string)  {
    this.recipeClicked.emit(feature);
  }

}
