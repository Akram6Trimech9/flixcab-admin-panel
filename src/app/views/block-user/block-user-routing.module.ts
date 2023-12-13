import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockUserComponent } from './block-user.component';

const routes: Routes = [{
  path:"",component:BlockUserComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlockUserRoutingModule { }
