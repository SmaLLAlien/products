import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { FromArrayPipe } from './pipes/from-array.pipe';



@NgModule({
  declarations: [FromArrayPipe],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FromArrayPipe
  ]
})
export class SharedModule { }
