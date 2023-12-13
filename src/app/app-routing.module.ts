import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './auth/cors/guards/login-guard.guard';
import { AdminComponent } from './layout/admin/admin.component';

const routes: Routes = [
  {path:'',component:AdminComponent  ,children:[
    {path:'',loadChildren:()=>import('./views/dashboard/dashboard.module').then(m=>m.DashboardModule)},
    {path:'categories',loadChildren:()=>import('./views/categories/categories.module').then(m=>m.CategoriesModule)},
    {path:'product',loadChildren:()=>import('./views/products/products-routing.module').then(m=>m.ProductsRoutingModule)},
    {path:'coupon',loadChildren:()=>import('./views/coupon/coupon.module').then(m=>m.CouponModule)},
    {path:'userslist',loadChildren:()=>import('./views/users-list/users-list.module').then(m=>m.UsersListModule)},
    {path:'blockusers',loadChildren:()=>import('./views/block-user/block-user.module').then(m=>m.BlockUserModule)},
    // {path:'shippinglist',loadChildren:()=>import('./views/block-user/block-user.module').then(m=>m.BlockUserModule)}

  ]},
  {path:'login',loadChildren:()=>import('./auth/login/login.module').then(m=>m.LoginModule)},
  // { path: '', redirectTo: 'login', pathMatch: 'full' },

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
