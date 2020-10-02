import { Component, OnInit } from '@angular/core';
import { StorefrontService } from './storefront.service';
import { Storefront } from './storefront'
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-storefront',
  templateUrl: './storefront.component.html',
  styleUrls: ['./storefront.component.css']
})
export class StorefrontComponent implements OnInit {

  marsProducts: Storefront[];

  constructor(private storefrontService : StorefrontService) { }

  ngOnInit() {

    // this.http.get<storeFront[]>(this.url).pipe(map(data => data['results']));

    this.storefrontService.getAllMarsProducts().subscribe(data => this.marsProducts = data);
    console.log(this.marsProducts);
    for (let storefront of this.marsProducts){
      this.storefrontService.getMarsProductImage(storefront).subscribe(data => storefront = data);
    }
  }
}