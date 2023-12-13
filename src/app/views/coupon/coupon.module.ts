import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CouponRoutingModule } from './coupon-routing.module';
import { CouponComponent } from './coupon.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/shared/material-module';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';


@NgModule({
  declarations: [
    CouponComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CouponRoutingModule
  ],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class CouponModule { }
