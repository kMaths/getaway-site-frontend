import { Component, OnInit } from '@angular/core';
import { StorefrontModel} from '../storefront/storefront';
import { CartService } from './cart.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  allCartItems: StorefrontModel[];
  user: StorefrontModel;


  constructor(private cartService : CartService, private authenticationService: AuthenticationService ) { }

  //get items selected from backend 
  
  ngOnInit() {
    
    console.log(this.authenticationService.currentUserValue.userId);
    this.user.userId = this.authenticationService.currentUserValue.userId,
    this.cartService.putAllCartItems(this.user)
    .subscribe(data =>
      
      this.allCartItems = data
        );
   }

  purchaseCart(): void {
    this.cartService.purchaseCart();
    this.allCartItems = null;
  }

}