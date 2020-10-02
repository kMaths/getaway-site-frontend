import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import {MessengerService} from 'src/app/services/messenger.service'
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem: Product //property inside a property item component
  constructor(private msg: MessengerService) { }

  ngOnInit(): void {
  }

handleAddToCart(){ //excutes on click of add to cart
this.msg.sendMsg(this.productItem)// sent by product-item-html handle add to cart inside the the class button 

}

}
