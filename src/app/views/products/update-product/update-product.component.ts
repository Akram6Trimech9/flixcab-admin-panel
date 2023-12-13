import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoriesService } from 'src/app/services/categories.service';
import { FilesService } from 'src/app/services/files.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/ts/interfaces/product';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  productForm!: FormGroup;
  productId: string = '';
  categories:any[]=[]
  constructor(
    public dialogRef: MatDialogRef<UpdateProductComponent>,
    private _productService: ProductService,
    private _fileService : FilesService ,
    private _categoryService:  CategoriesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formbuilder: FormBuilder
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.productForm = this.formbuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      ingredients: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      prix: ['', [Validators.required]],
      promotion: ['', [Validators.required, Validators.minLength(2)]],
      category: ['', [Validators.required, Validators.minLength(2)]],
    });

     this.productForm.patchValue({
      title: this.data.title,
      ingredients: this.data.ingredients,
      description: this.data.description,
      prix: this.data.prix,
      promotion: this.data.promotion,
      category: this.data.category.title,
    });

    this.productId = this.data._id; 
    this._categoryService.getCategory().subscribe(res=>{ 
      this.categories = res
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.productForm.controls;
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      // Similar to the add product onSubmit logic
      // ... Extract form values and update the product using _productService
      // ... Don't forget to subscribe to the updateProduct method
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  deleteAndUploadPhotos(): void {
    // Implement logic to delete existing photos and upload new ones
    // Placeholder code, replace with actual logic
    console.log('Deleting and uploading photos...');
    // Call _productService to handle deletion and uploading
    // Example: this._productService.deleteAndUploadPhotos(this.productId, /* new photos */).subscribe(/* handle response */);
  }

  deleteImage(id: any): void {
    this._fileService.delete(id).subscribe({
      next:(res)=>{ 
         console.log(res)
         }
      
    })
  }
}
