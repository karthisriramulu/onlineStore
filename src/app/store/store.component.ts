import { Component, OnInit } from '@angular/core';
import {Product} from 'src/Model/product.model';
import { ProductRepositry } from '../../Model/product.repositry'
import {Cart} from './cart.model';
import {Router} from '@angular/router';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage:any = 1;

  constructor(private repositry: ProductRepositry, 
              private cart: Cart,
              private router: Router) { }

  ngOnInit(): void {
  }

  //
  get products() : Product[] {

    let pageIndex = ( this.selectedPage -1 ) * this.productsPerPage;
    return this.repositry.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  //
  get categories() : string[] {

    return this.repositry.getCategories();
  }

  changeCategory(newCategory? : string){
    
    this.selectedCategory = newCategory;
    this.changePage(1);
  }

  changePage(newPage : Number){

    this.selectedPage = newPage;
  }

  changePageSize(newSize : Number){

    this.productsPerPage = Number(newSize);
  }

  get pageNumbers() : number[] {

    return Array(Math.ceil(this.repositry
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x,i) => i+1);
  }

  addProductToCart(Product: Product){

    this.cart.addLine(Product);
    
    this.router.navigateByUrl("/cart");
  }
}
