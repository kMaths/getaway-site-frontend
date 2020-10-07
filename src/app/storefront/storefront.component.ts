import { Component, OnInit } from '@angular/core';
import { Storefront, StorefrontModel } from './storefront';
import { StorefrontImage } from './storefront-image';
import { StorefrontService } from '../services/storefront.service';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  marsProducts: Storefront[];
  productImages: StorefrontImage[];
  temp : Storefront;

  constructor(private storefrontService: StorefrontService) { }

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
  submitStorefrontItem(newStorefront: Storefront) {
    console.log(newStorefront);
    this.storefrontService.postStorefrontItem(newStorefront).subscribe(data => {
      
    });
  }

}