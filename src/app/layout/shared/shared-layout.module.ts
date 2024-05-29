import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    HeaderComponent,
    TopNavComponent,
  ],
  exports:[
    HeaderComponent,
    TopNavComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SharedLayoutModule { }
