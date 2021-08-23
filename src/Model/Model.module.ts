import{ NgModule } from '@angular/core';
import { ProductRepositry } from './product.repositry';
import { StaticDataSource } from './static.datasource';
import { Cart } from '../app/store/cart.model';
import {Order} from './order.model';
import {OrderRepository} from './order.repository';
import {HttpClientModule} from '@angular/common/http';
import {RestDataSource} from './rest.datasource';
import {AuthService} from './auth.service';

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepositry, Cart, 
                Order, OrderRepository, 
                {provide: StaticDataSource, useClass: RestDataSource},
                RestDataSource, AuthService ]
})

export class ModelModule {
    
}