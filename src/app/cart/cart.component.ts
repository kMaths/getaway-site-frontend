import { Component, OnInit } from '@angular/core';
import { StorefrontModel } from '../storefront/storefront';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  allCartItems: StorefrontModel[];

  constructor(private cartService : CartService) { }

  //get items selected from backend 
  
  ngOnInit() {
    this.cartService.getAllCartItems()
      .subscribe(data => this.allCartItems = data);
   }

  purchaseCart(): void {
    this.cartService.purchaseCart();
    this.allCartItems = null;
  }

}