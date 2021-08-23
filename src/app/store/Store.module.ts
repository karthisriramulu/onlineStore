import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModelModule} from '../../Model/Model.module'

import { StoreComponent } from '../store/store.component';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import {CartDetailsComponent} from '../cart-details/cart-details.component';
import {CheckoutComponent} from '../checkout/checkout.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
      StoreComponent,
      CartSummaryComponent,
      CartDetailsComponent,
      CheckoutComponent
    ],
    imports: [
      ModelModule,
      FormsModule,
      BrowserModule,
      RouterModule
    ],
    exports: [ StoreComponent, CartDetailsComponent, CheckoutComponent]
  })

export class StoreModule{

}
