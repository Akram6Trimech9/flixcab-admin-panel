import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { ApiRoutes } from '../ts/enum';
import { Product } from '../ts/interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http:HttpClient) { }

  getAllProducts(query:string):Observable<Product[]>{ 
    return  this._http.get<Product[]>(`${ApiRoutes.product}?${query}`)
  }
  addProduct(product : Product):Observable<Product>{ 
    return this._http.post<Product>(`${ApiRoutes.product}/`,product)
  }
  deleteProduct(id : any):Observable<any>{ 
   return this._http.delete(`${ApiRoutes.product}/${id}`)
  }
}
