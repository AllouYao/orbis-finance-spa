import { Component, Input } from '@angular/core';

@Component({
  selector: 'offset-menu',
  templateUrl: './offset-menu.component.html',
  styleUrl: './offset-menu.component.scss'
})
export class OffsetMenuComponent {

  @Input() label: string = 'Home';
  @Input() icon: string = 'Home';

  isOpen: boolean = false;


  openMenu(){
    this.isOpen = true ;
  }


}
