import { NgModule } from '@angular/core';
 import { ProductsRoutingModule } from './products-routing.module';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { AddProductComponent } from './add-product/add-product.component';
import { MaterialModule } from 'src/app/shared/material-module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
     ProductsComponent,
     ProductTableComponent,
     AddProductComponent,
     UpdateProductComponent
  ],
  imports: [
    CommonModule,
     MaterialModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
