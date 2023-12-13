// coupon.component.ts

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { CouponService } from 'src/app/services/coupon.service';
import { ProductService } from 'src/app/services/product.service';
import { Coupon } from 'src/app/ts/interfaces/coupon';
import { Product } from 'src/app/ts/interfaces/product';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  showAddCouponForm: boolean = false;  
  isLinear = false;
  allProducts: Product[] = [];
  selectedProducts: Product[] = [];
  allComplete: boolean = false;
  allCoupons : Coupon[]=[]
   formData: any;

  constructor(private _formBuilder: FormBuilder, private _productService: ProductService , private _couponService : CouponService) {
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      expiry: ['', [Validators.required, this.expiryDateValidator]],
      discount: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      productCtrl: [''],
    });

     this.formData = {};
  }

  query: string = '';

  ngOnInit(): void {
    this._productService.getAllProducts(this.query).subscribe(res => {
      this.allProducts = res;
    });
    this._couponService.getCoupons().subscribe(res=>{ 
      this.allCoupons= res ;
    })
  }

  expiryDateValidator(control: FormControl) {
    const currentDate = new Date();
    const inputDate = new Date(control.value);

    return inputDate > currentDate ? null : { invalidDate: true };
  }

  isFirstFormValid() {
    return this.firstFormGroup.valid;
  }

  isSecondFormValid() {
    return this.secondFormGroup.valid;
  }

  toggleAllProducts() {
    this.allComplete = !this.allComplete;

    if (this.allComplete) {
      this.selectedProducts = [...this.allProducts];
    } else {
      this.selectedProducts = [];
    }
  }

  searchProducts() {
    const searchTerm = this.secondFormGroup.get('productCtrl')?.value;
    if (searchTerm) {
      this.selectedProducts = this.allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm)
      );
    } else {
      this.selectedProducts = [...this.allProducts];
    }

    this.allComplete = this.selectedProducts.length === this.allProducts.length;
  }

  updateAllComplete() {
    this.allComplete = this.selectedProducts.length === this.allProducts.length;
  }

  someComplete(): boolean {
    return this.selectedProducts.length > 0 && this.selectedProducts.length < this.allProducts.length;
  }

  isProductSelected(product: Product): boolean {
    return this.selectedProducts.some(selectedProduct => selectedProduct.slug === product.slug);
  }

  gatherFormData() {
    this.formData = {
      ...this.firstFormGroup.value,
      products: this.selectedProducts,
    };
    this._couponService.addCoupon(this.formData).subscribe(res=>{ 
      if(res){
console.log(res);
this.resetStepper();


      }
    })
  }

  resetStepper() {
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
    this.allComplete = false;
  }
  addCouponFn() {
     this.showAddCouponForm = !this.showAddCouponForm;
  }
  updateCoupon(coupon : Coupon){

  }
  deleteCoupon(coupon: Coupon) {
    this._couponService.deleteCoupon(coupon._id).subscribe(res => {
      this.allCoupons = this.allCoupons.filter((item: any) => item._id !== coupon._id);
    });
  }
  
}
