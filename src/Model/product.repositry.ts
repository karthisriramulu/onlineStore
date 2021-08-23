import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import {RestDataSource} from './rest.datasource';
// import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepositry{

    private products : Product[] = [];
    private categories : string[] = [];

    constructor( private datasource : RestDataSource){

        datasource.getProducts().subscribe(data => {

            this.products = data;
            this.categories = data.map(p => p.category)
            .filter((c,index,array) => array.indexOf(c) == index )
            .sort();
        });

    }
    
    getProducts(category : string = null){

        return this.products
        .filter(p => category == null || category == p.category);
    }

    getProduct(id : number) {
       
        return this.products.filter(p => p.id == id).reduce(v => {return {...v}});

        // .reduce(v => {return {...v}}) to retun object only
    }

    getCategories() : string[] {

        return this.categories;
    }


    saveProduct(product : Product) {

        if(product.id == null || product.id == 0){
            this.datasource.saveProduct(product)
            .subscribe(p => this.products.push(p))
        }else{
            this.datasource.updateProduct(product)
            .subscribe(p => 
                {
                    this.products.splice(this.products.findIndex(p => p.id == product.id), 1, product);
                });
        }
    }


    deleteProduct(id:number){
        this.datasource.deleteProduct(id)
        .subscribe(p => {
                        
            this.products.slice(this.products.findIndex(p=>p.id == id), 1);
        });
    }

}