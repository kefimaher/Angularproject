import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../core/product';

@Injectable({
  providedIn: 'root'
})
export class ConsumerProductService {

  constructor(private http: HttpClient) { }
 getProduct(){
  return this.http.get<product[]>("http://localhost:3000/product")
 }

 getProductById(id : number){
  return this.http.get("http://localhost:3000/product/"+ id)
 }


}
