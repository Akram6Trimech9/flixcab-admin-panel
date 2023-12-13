import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShippingListRoutingModule } from './shipping-list-routing.module';
import { ShippingListComponent } from './shipping-list.component';


@NgModule({
  declarations: [
    ShippingListComponent
  ],
  imports: [
    CommonModule,
    ShippingListRoutingModule
  ]
})
export class ShippingListModule { }
