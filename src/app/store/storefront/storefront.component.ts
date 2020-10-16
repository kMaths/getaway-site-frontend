import { Component, OnInit } from '@angular/core';
import { Product, ProductModel } from './storefront';
import { ProductImage } from './product-image';
import { StorefrontService } from '../services/product.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  marsProducts: Product[];
  productImages: ProductImage[];
  temp: Product;
  newItem: ProductModel;
  itemMessage: string;
  
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
  submitStorefrontItem(newStorefront: ProductModel) {
    newStorefront.userId = this.authenticationService.currentUserValue.userId;
    console.log(newStorefront);
    this.storefrontService.postStorefrontItem(newStorefront).subscribe(data => {
      if (data) {
        this.newItem;
        this.itemMessage = 'Item added.'
        console.log('We sold things.')
        console.log(newStorefront.userId = this.authenticationService.currentUserValue.userId);
      } else {
        this.itemMessage = 'Item not added.'
        console.log('Some kind of buying error.')
      }
    });
  }

}