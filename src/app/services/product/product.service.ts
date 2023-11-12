import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../../models/product/product';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { ProductResponse } from 'src/app/models/product/dao/product-response';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseEndPoint = `${environment.apiUrlBackend}/product`;

  private head: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  // this method call data for page view customer-view/list-products
  public getProductByCustomerId(document: string, page :string, size: string)
  : Observable<ProductResponse> {

    const params = new HttpParams()
    .set('page', page)
    .set('size', size);

    return this.http.get(`${this.baseEndPoint}/${document}`,{params: params})
      .pipe(
        map(products => {
          return products as any;
        })
      );

  }

  // this method send data for page view customer-view/list-products/new-product to backend
  public createProduct(product: Product): Observable<Product> {

    return this.http.post(`${this.baseEndPoint}/new_product_customer`, product, { headers: this.head })
      .pipe(
        map(product => {
          return product as Product;
        })
      );

  }


}
