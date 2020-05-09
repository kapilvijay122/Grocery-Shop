import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/products/products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  
  constructor(private httpClient:HttpClient) { }
  

  getProducts():Observable<Product[]>{
    let productUrl = "https://73aa56e1-d7e9-4aca-9e58-79e8ce86604c.mock.pstmn.io/new-products";
    return this.httpClient.get(productUrl) as Observable<Product[]>;
  }

 
}
