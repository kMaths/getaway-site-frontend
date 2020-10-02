import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessengerService } from 'src/app/services/messenger.service'


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
  /* {id: 1,productId: 1, productName:"tester 1", qty: 4, price: 100 },
  {id: 2,productId: 2, productName:"tester 2",qty: 2, price: 555 },
  {id: 3,productId: 14,productName:"tester 4" ,qty: 3, price: 777 },
  {id: 4,productId: 23,productName:"tester 5" ,qty: 2, price: 444 },
  {id: 5,productId: 6,productName:"tester 12", qty: 6, price: 100 }
  */]; 

cartTotal = 0
constructor(private msg: MessengerService ){ }

  ngOnInit() {


    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)

    })
  }

  addProductToCart(product: Product){
    let productExists =false

    for(let i in this.cartItems){
      if(this.cartItems[i].productId === product.id){
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

if(!productExists){}
if(this.cartItems.length ===0 ){
  this.cartItems.push({
    productName: product.name,
    productId: product.id,
    qty: 1,
    price: product.price
  })
}
// Gave up trying to make this work =(
//    /*  does work for(let i in this.cartItems){
//     if( this.cartItems[i].id === product.id){
//       this.cartItems[i].qty++ */ //should increase the cart item by a multiple of one of if you add the same thing twice to the cart.
//       for(let i in this.cartItems){
//         if( this.cartItems[i].id === product.id){
//           this.cartItems[i].qty++
          
//     }else{
//     this.cartItems.push({
//       productName: product.name,
//       productId: product.id,
//       qty: 1,
//       price: product.price
//     })

//   }
// }
  
//   //anytime you use an observable you need to use subscribe
    this.cartTotal =0
  this.cartItems.forEach(item => {
    this.cartTotal += (item.qty * item.price)
    })
  }
  }
 
