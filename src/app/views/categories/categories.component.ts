import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/ts/interfaces/category';
import { AddCategoryComponent } from './modal/add-category/add-category.component';
import { UpdateCategoryComponent } from './modal/update-category/update-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent  implements OnInit{
  allCategories !: Category[]
  constructor(private _categiesService : CategoriesService , private dialog : MatDialog ,private _snackBar: MatSnackBar){}
  ngOnInit(): void {
    this._categiesService.getCategory().subscribe({
      next:(res)=>{
        this.allCategories = res
      },error:(error)=>{
        console.log(error)
      }
    })
  }
  category!: Category
  addCategory(){
     const dialogRef = this.dialog.open(AddCategoryComponent,{
      width:'300px'
     })
    dialogRef.afterClosed().subscribe((data: any) => {
      if (data) {
        this.category  ={
          title:data.title , 
          description : data.descripiton
        } 
        console.log(this.category)
         this._categiesService.addCategory(this.category).subscribe({ 
          next:(res)=> { 
            this.allCategories.push(this.category)
            this._snackBar.open('Category Added', 'Undo', {
              duration: 1000,
              panelClass: ['custom-snackbar']
            });
          },
          error:(error)=>{ 
           console.log(error);
           
          }
         })
       }
    });
  }
  deleteCategory(id : any){ 
    this._categiesService.deleteCategory(id).subscribe({
      next:()=>{
        this.allCategories = this.allCategories.filter((item) => item._id !== id); 
       },error:(error)=> { 
        console.log(error)
      }
    })
  }
  updateCat : any
  updateCategory(category: Category) {
    const dialogRef = this.dialog.open(UpdateCategoryComponent, {
      data: category
    });
  
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && (result.title.length > 0 || result.description.length > 0)) {
        this.updateCat = {};
  
        if (result.title.length > 0) {
          this.updateCat.title = result.title;
        }
  
        if (result.description.length > 0) {
          this.updateCat.description = result.description;
        }
  
        this._categiesService.updateCategory(category._id, this.updateCat).subscribe({
          next: (res) => {
            this.allCategories.forEach((item, index) => {
              if (item._id === res._id) {
                this.allCategories[index] = res;
              }
            });
          },
          error: (error) => {
            console.log(error);
          }
        });
      }
    });
  }
    
}
