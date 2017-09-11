import { Directive, HostListener, HostBinding ,ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
@HostBinding('class.open') isOpen= true;

@HostListener('click') toggleOpen() {
  this.isOpen = this.isOpen;
}
 

//following code is to remove dropdown while click anywhere else in the page .

 @HostListener('document:click', ['$event']) 
 clickout(event) {
    if
  (!this.elRef.nativeElement.contains(event.target)) { this.isOpen = false; 
  }else{ this.isOpen = true; } } 
  
  constructor(private elRef: ElementRef) { 

  }

}



 /*  constructor() { }
 */
