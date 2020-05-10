import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modules/products/products';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private httpClient: HttpClient) { }

  /**
   * @description
   * @date 2020-05-10
   * @returns {Observable<Product[]>}
   * @memberof ProductsService
   */
  getProducts(): Observable<Product[]> {
    let productUrl = "https://73aa56e1-d7e9-4aca-9e58-79e8ce86604c.mock.pstmn.io/new-products";
    return this.httpClient.get(productUrl) as Observable<Product[]>;
  }

  /**
   * @description
   * @date 2020-05-10
   * @returns {Observable<Product>}
   * @memberof ProductsService
   */
  getProductById(id: number): Observable<Product> {
    let productUrl = "https://7c3f7955-c1d2-443f-a084-c934a805219f.mock.pstmn.io/new-products/2";
    return this.httpClient.get(productUrl) as Observable<Product>;
  }

}
