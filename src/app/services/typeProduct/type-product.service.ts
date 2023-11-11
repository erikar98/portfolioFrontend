import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { TypeProduct } from '../../models/typeProduct/type-product';

@Injectable({
  providedIn: 'root'
})
export class TypeProductService {

  private baseEndPoint = `${environment.apiUrlBackend}/typeProduct`;

  constructor(private http: HttpClient) { }

  //this method call data for page customer-update and customer-create
  public getAllTypeProducts():Observable<TypeProduct[]>{

    return this.http.get<TypeProduct[]>(`${this.baseEndPoint}`);

  }
}
