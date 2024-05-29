import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SharedLayoutModule } from './shared/shared-layout.module';



@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedLayoutModule
  ]
})
export class LayoutModule { }
