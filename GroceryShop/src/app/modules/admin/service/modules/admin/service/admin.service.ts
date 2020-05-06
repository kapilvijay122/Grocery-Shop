import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  //private baseUrl = 'http://localhost:8090/api/products';
  constructor(private http: HttpClient) { }
  
  createProduct(formData: FormData):Observable<any> 
  {
    return this.http.post<FormData>('http://localhost:8090/products/formData', formData);
  }
}
