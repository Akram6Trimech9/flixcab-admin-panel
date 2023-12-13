import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductService } from 'src/app/services/product.service';
import { Category } from 'src/app/ts/interfaces/category';
import { Product } from 'src/app/ts/interfaces/product';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  implements OnInit{
 
  allCategories !: Category[]
  allProducts !:Product[]
  query: string =''
  constructor( private _categoryService : CategoriesService , private _productService : ProductService ,  private dialog: MatDialog ){}

  ngOnInit(): void {
        this._categoryService.getCategory().subscribe(res=>{
          this.allCategories =  res
        })
       this._productService.getAllProducts(this.query).subscribe(res=>{ 
         this.allProducts =res
        })
  }

   addProduct(): void {
     
    const dialogRef = this.dialog.open(AddProductComponent ,{
      data:this.allCategories
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     });
 }


 deleteProduct(event: any){
    this._productService.deleteProduct(event).subscribe(res =>{ 
       if(res){ 
         this.allProducts = this.allProducts.filter((item:any)=>item._id !== event) 
       }
    })
 }
 updateProduct(event: any): void {
 console.log(event);
 

  const dialogRef = this.dialog.open(UpdateProductComponent, {
    data: event,  
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
   });
}
changeCat(id: string) {
  console.log('Changing category:', id);
  this.selectedCategory = id;

  if (id !== '') {
      this.query = `category=${id}`;
      this._productService.getAllProducts(this.query).subscribe(res => {
          this.allProducts = res;
          console.log('Filtered products:', this.allProducts);
      });
  } else {
      this.query = '';
      this._productService.getAllProducts(this.query).subscribe(res => {
          this.allProducts = res;
          console.log('All products:', this.allProducts);
      });
  }
}


selectedCategory: string | null = null;

 
 }
