import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = 'http://localhost:8090/api/products';
  constructor(private http: HttpClient) { }

  addProduct(formData): Observable<any> {
    return this.http.post(this.baseUrl+"/add-product", formData);
  }
  getProducts(): Observable<any> 
  {
    return this.http.get(this.baseUrl);
  }
  getProductByProductId(productId: number): Observable<any> 
  {
    return this.http.get(`${this.baseUrl}/${productId}`);
  }

}
