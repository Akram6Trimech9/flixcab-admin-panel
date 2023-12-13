import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { MaterialModule } from 'src/app/shared/material-module';
import { AddCategoryComponent } from './modal/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateCategoryComponent } from './modal/update-category/update-category.component';


@NgModule({
  declarations: [
    CategoriesComponent,
    AddCategoryComponent,
    UpdateCategoryComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
