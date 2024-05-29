import { Component, Input } from '@angular/core';

@Component({
  selector: 'offset-sub-menu',
  templateUrl: './offset-sub-menu.component.html',
  styleUrl: './offset-sub-menu.component.scss'
})
export class OffsetSubMenuComponent {

  @Input() label: string = '';

  isOpen: boolean = false;


  openMenu(){
    this.isOpen = true ;
  }


}
