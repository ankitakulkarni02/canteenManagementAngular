import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemAdd } from './item-add';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  private baseUrl="http://localhost:8090/adminItems/items";
  update: any;

  constructor(private httpClient:HttpClient) { }
  getFoodItemsList():Observable<ItemAdd[]>{
    return this.httpClient.get<ItemAdd[]>(`${this.baseUrl}`);
    // return this.httpClient.get<ItemAdd[]>("url/adminItems/items")
  }
  createFoodItems(items:FormData):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,items);
  }
  getItemsbyId(id:number):Observable<ItemAdd>{
    return this.httpClient.get<ItemAdd>(`${this.baseUrl}/${id}`);
  }
  updateItems(id:number,items:ItemAdd):Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`,items);
  }
  delteItems(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  searchItems(query:String){
    return this.httpClient.get<ItemAdd[]>(`http://localhost:8090/adminItems/items?q=${query}`);
  }
  // saveImage(formData:FormData):Observable<any>{
  //   return this.httpClient.post('http://localhost:8090/adminItems/items/saveImage',formData);
  // }
}
