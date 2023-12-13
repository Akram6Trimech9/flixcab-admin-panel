import { Component, Inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/ts/interfaces/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm!: FormGroup;
  uploadPictures: boolean = false;
  productId: string = '';

  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    private _productService: ProductService,
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
  }

  get f(): { [key: string]: AbstractControl } {
    return this.productForm.controls;
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const title = this.productForm.value.title;
      const description = this.productForm.value.description; // Corrected typo here
      const ingredients = this.productForm.value.ingredients;
      const prix = this.productForm.value.prix;
      const promotion = this.productForm.value.promotion;
      const category = this.productForm.value.category;

      const data: Product = {
        title: title,
        description: description,
        ingredients: ingredients,
        prix: prix,
        promotion: promotion,
        category: category,
        slug: '',
        images: [],
        totalrating: 0
      };

      this._productService.addProduct(data).subscribe({
        next: (res: any) => {
          if (res._id) {
            this.uploadPictures = true;
            this.productId = res._id;
          }
        },
        error: (error) => {
          // Handle error
        }
      });
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
