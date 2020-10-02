import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService} from 'src/app/services/product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[]= []// property created to make an array of "product/object"

  constructor(private productService: ProductService) { } //injection of product service

  ngOnInit() {
    this.products = this.productService.getProducts() //pulling in everything in the statis array from product service
  }

}
