import {Injectable} from '@angular/core';
import {Order} from './order.model';
// import {StaticDataSource} from './static.datasource';
import {Observable} from 'rxjs';
import {RestDataSource} from './rest.datasource';

@Injectable()

export class OrderRepository{

    private orders: Order[] =[];
    private loaded: boolean = false;

    constructor(private dataSource: RestDataSource){

     this.loadOrders();
    }

    loadOrders(){
        this.loaded = true;
        this.dataSource.getOrder()
        .subscribe(orders => {

        this.orders = orders 
        console.log("test order", orders);

        });
    }

    getOrders(): Order[] {
        if(this.loaded){
            return this.orders;
        }
    }

    saveOrder(Order: Order): Observable<Order>{
        
        return this.dataSource.saveOrder(Order);
    }


    updateOrder(order : Order) {

        this.dataSource.updateOrder(order)
        .subscribe(order => {

            this.orders.splice(this.orders.findIndex(o=>o.id == order.id), 1, order);
        });
    }


    deleteOrder(id: number){

        this.dataSource.deleteOrder(id)
        .subscribe(order => {

            this.orders.splice(this.orders.findIndex(o=>o.id == id), 1);
        });
    }


}