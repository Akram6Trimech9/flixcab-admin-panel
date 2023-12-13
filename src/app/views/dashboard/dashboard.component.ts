import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 constructor(private _productService :ProductService , private _userService :UsersService){
 }
 products : any[] =[]
 users : any[]=[]
  ngOnInit(): void {
      this._productService.getAllProducts('').subscribe(res=>{ 
        this.products=res
      })
      this._userService.getUsers().subscribe(res=>{ 
        this.users = res
      })
 }
}
