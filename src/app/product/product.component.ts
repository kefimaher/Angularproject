import { Component } from '@angular/core';
import { product } from '../core/models/product';
import { ConsumerProductService } from '../services/consumer-product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  price!: number;
  listProducts: any;
  alert!:number;
  constructor(private cons:ConsumerProductService) {}
  ngOnInit() {
    this.listProducts = this.cons.getProduct();
  }

  increment(i: number) {
    this.listProducts[i].like++;
  }
  buy(i: number) {
    this.listProducts[i].quantity--;
  }
  /*getAlert(){
    this.alert=this.Cs.getStat(this.listProducts,'quantity',0);
  }*/
}