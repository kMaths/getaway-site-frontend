import { Component, OnInit } from '@angular/core';
import { Storefront, StorefrontModel } from './storefront';
import { StorefrontImage } from './storefront-image';
import { StorefrontService } from '../services/storefront.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  marsProducts: Storefront[];
  productImages: StorefrontImage[];
  temp: Storefront;
  newItem: StorefrontModel;
  
  constructor(private storefrontService: StorefrontService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.storefrontService.getAllMarsProducts().subscribe(data => {
      this.marsProducts = data;
      for (let storefront of this.marsProducts) {
        this.storefrontService.getMarsProductImage(storefront).subscribe(result => {
          this.productImages = result;
          console.log(this.productImages);
          storefront.image = this.productImages[0].url_170x135;
          console.log(this.marsProducts)
        });
      }
    })
  }

  //as user selects an item, tell backend an item was added .... post to backend      
  submitStorefrontItem(newStorefront: StorefrontModel) {
    newStorefront.userId = this.authenticationService.currentUserValue.userId;
    console.log(newStorefront);
    this.storefrontService.postStorefrontItem(newStorefront).subscribe(data => {
      if (data) {
        this.newItem;
        window.alert("The item has been added to your cart.")
        console.log('We sold things.')
        console.log(newStorefront.userId = this.authenticationService.currentUserValue.userId);
      } else {
        console.log('Some kind of buying error.')
      }
    });
  }

}