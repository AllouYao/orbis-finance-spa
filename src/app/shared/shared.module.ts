import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffsetMenuComponent } from './offset-menu/offset-menu.component';
import { OffsetItemComponent } from './offset-item/offset-item.component';
import { OffsetSubMenuComponent } from './offset-sub-menu/offset-sub-menu.component';
import { OffsetCardComponent } from './offset-card/offset-card.component';


@NgModule({
  declarations: [
    OffsetMenuComponent,
    OffsetItemComponent,
    OffsetSubMenuComponent,
    OffsetCardComponent
  ],
  exports:[
    OffsetMenuComponent,
    OffsetItemComponent,
    OffsetSubMenuComponent,
    OffsetCardComponent

  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
