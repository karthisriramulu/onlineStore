import {Component} from '@angular/core';
import {Product} from 'src/Model/product.model';
import {ProductRepositry} from 'src/Model/product.repositry';


@Component({
    templateUrl: 'productTable.component.html'
})


export class ProductTableComponent{
   
    constructor(private repository: ProductRepositry){

    }


    getProducts() : Product[]{

        return this.repository.getProducts();
    }


    deleteProduct(id: number) {

        this.repository.deleteProduct(id);
    }


}