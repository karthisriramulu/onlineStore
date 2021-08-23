import {Component} from '@angular/core';
import {Order} from 'src/Model/order.model';
import {OrderRepository} from 'src/Model/order.repository';


@Component({
    templateUrl: 'OrderTable.component.html'
})



export class OrderTableComponent {

    includeShipped = false;

    constructor(private repository: OrderRepository){

    }

    //get orders
    getOrders(): Order[]{
        
        return this.repository.getOrders()
        .filter(o => this.includeShipped || !o.shipped);
    }

    //mark shipped
    markShipped(order: Order) {
        
        order.shipped = true;
        this.repository.updateOrder(order);
    }

    //delete order
    delete(id: number){

        this.repository.deleteOrder(id);
    }

}