import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiRoutes } from '../ts/enum';
import { Category } from '../ts/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http:HttpClient) { }
 
  addCategory(category : Category):Observable<Category>{
     return this._http.post<Category>(`${ApiRoutes.category}/`,category)
  }
  getCategory():Observable<Category[]>{
     return this._http.get<Category[]>(`${ApiRoutes.category}/`)
  }
  updateCategory(id: string , category : Category):Observable<Category>{ 
    return this._http.put<Category>(`${ApiRoutes.category}/${id}`,category)
  }
  getOneCategory(id :string , category : Category) : Observable<Category>{ 
     return  this._http.get<Category>(`${ApiRoutes.category}/${id}`)
  }
  deleteCategory(id :string):Observable<any>{ 
     return this._http.delete<any>(`${ApiRoutes.category}/${id}`)
  }
}
