import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorefrontComponent } from './storefront/storefront.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [StorefrontComponent, CartComponent],
  imports: [
    CommonModule
  ]
})
export class StoreModule { }
