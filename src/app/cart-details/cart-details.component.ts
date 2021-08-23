import { Component, OnInit } from '@angular/core';
import {Cart} from '../store/cart.model';


@Component({
  templateUrl: './cart-details.component.html'
})
export class CartDetailsComponent implements OnInit {

  constructor(public cart: Cart) { }

  ngOnInit(): void {
    
  }

}
