import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { StorefrontService } from './storefront.service';
import { Storefront } from './storefront'
import { NgForOf } from '@angular/common';
import { StorefrontImage } from './storefront-image';
>>>>>>> 880069dad291d973775ea1ca43d9a04e7838eca3

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
  }

}
=======
  marsProducts: Storefront[];
  productImages: StorefrontImage[];
  

  constructor(private storefrontService : StorefrontService) { }

  ngOnInit() {

    // this.http.get<storeFront[]>(this.url).pipe(map(data => data['results']));

    this.storefrontService.getAllMarsProducts().subscribe(data => {
      this.marsProducts = data;
      for (let storefront of this.marsProducts){
       this.storefrontService.getMarsProductImage(storefront).subscribe(result => {
        this.productImages = result;
        console.log(this.productImages);
        storefront.image = this.productImages[0].url_fullxfull});
       
      }
      console.log(this.marsProducts)
    })
  }

}
>>>>>>> 880069dad291d973775ea1ca43d9a04e7838eca3
