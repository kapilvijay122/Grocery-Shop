import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  private baseUrl = 'http://localhost:8090/api/users';
  constructor(private http: HttpClient) { }
  createUser(user: any): Observable<any> {
    return this.http.post(this.baseUrl, user);
  }
  getUserByUserName(userName: String): Observable<object> {
    return this.http.get(`${this.baseUrl}/${userName}`);
  }
}
