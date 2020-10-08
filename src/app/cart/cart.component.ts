import { Component, OnInit } from '@angular/core';
import { Storefront, StorefrontModel} from '../storefront/storefront';
import { CartService } from './cart.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  allCartItems: Storefront[];
  
  
  constructor(private cartService : CartService, private authenticationService: AuthenticationService ) { }

  //get items selected from backend 
  
  ngOnInit() {
    
    console.log(this.authenticationService.currentUserValue.userId);
    
  
    this.cartService.putAllCartItems(this.authenticationService.currentUserValue.userId)
    .subscribe(data =>{
      console.log(data);
      this.allCartItems = data;
    });
   }

  purchaseCart(): void {
    this.cartService.purchaseCart(this.authenticationService.currentUserValue.userId)
    .subscribe(data =>{
      console.log(data);
      this.allCartItems = data;
    });
   
    this.allCartItems = null;
  }

}