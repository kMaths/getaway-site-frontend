import { Injectable } from '@angular/core';
import {Product} from 'src/app/models/product'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
//
  products: Product[] = [
  //products go here which you will get from the API
new Product (1, 'Product 1', 'This is the product 1 description. ' ,234),
new Product (2, 'Product 1', 'This is the product 1 description. ' ,234),
new Product (3, 'Product 1', 'This is the product 1 description. ' ,234),
new Product (4, 'Product 1', 'This is the product 1 description. ' ,234),
new Product (5, 'Product 1', 'This is the product 1 description. ' ,234),
  ]
constructor() {}
getProducts(): Product[]{
  //TODO: update products from an API thats observable
  return this.products
}

}
