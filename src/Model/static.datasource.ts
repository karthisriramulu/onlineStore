import { Product } from "./product.model";
import {Observable, from} from 'rxjs';
import { Injectable } from "@angular/core";
import {Order} from './order.model';

@Injectable()
export class StaticDataSource{

    private products: Product[] = [
        new Product(1, 'Track Shoe', 'Category 1', 'Shoe (Category 1)', 99),
        new Product(2, 'Formal Shoe', 'Category 1', 'Shoe (Category 1)', 50),
        new Product(3, 'Sports Shoe', 'Category 1', 'Shoe (Category 1)', 69),
        new Product(4, 'Running Shoe', 'Category 1', 'Shoe (Category 1)', 80),
        new Product(5, 'Pizza', 'Category 2', 'Food (Category 2)', 51),
        new Product(6, 'KFC', 'Category 2', 'Food (Category 2)', 60),
        new Product(7, 'Briyani', 'Category 2', 'Food (Category 2)', 50),
        new Product(8, 'Cheicken Fry', 'Category 2', 'Food (Category 2)', 75),
        new Product(9, 'Fish', 'Category 2', 'Food (Category 2)', 25),
        new Product(10, 'Bull', 'Category 2', 'Food (Category 2)', 25),
        new Product(11, 'carrat', 'Category 2', 'Food (Category 2)', 25),
        new Product(12, 'garlic', 'Category 3', 'Food (Category 2)', 25),
    ];


    getProducts() : Observable<Product[]> {

        return from([this.products])
    }


    saveOrder(Order : Order): Observable<Order>{
        console.log(JSON.stringify(Order));
        return from([Order]);
    }
}