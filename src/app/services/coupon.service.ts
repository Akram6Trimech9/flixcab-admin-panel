import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../ts/enum';
import { Category } from '../ts/interfaces/category';
import { Coupon } from '../ts/interfaces/coupon';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  constructor(private _http:HttpClient) { }
 
 addCoupon(coupon : Coupon):Observable<any>{
    return this._http.post<any>(`${ApiRoutes.coupon}/`,coupon)
 }
 getCoupons():Observable<any>{
    return this._http.get<any>(`${ApiRoutes.coupon}/`)
 }
 deleteCoupon(id:any):Observable<any>{ 
    return this._http.delete<any>(`${ApiRoutes.coupon}/${id}`)
 }
}
