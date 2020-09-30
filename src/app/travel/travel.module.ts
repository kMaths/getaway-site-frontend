import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelComponent } from './travel.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [TravelComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
})
export class TravelModule { }
