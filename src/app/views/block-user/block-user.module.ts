import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlockUserRoutingModule } from './block-user-routing.module';
import { BlockUserComponent } from './block-user.component';
import { BlockModalComponent } from './block-modal/block-modal.component';
import { MaterialModule } from 'src/app/shared/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BlockUserComponent,
    BlockModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BlockUserRoutingModule
  ]
})
export class BlockUserModule { }
