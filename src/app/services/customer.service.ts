import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CustomerTypeOne } from '../models/customer-type-one';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { CustomerTypeTwo } from '../models/customer-type-two';
import { CustomerTypeThree } from '../models/customer-type-three';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseEndPoint = "http://localhost:8080/api/v1/customer";

  private head: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  // this method call data for page view customer-search
  public getCustomerTypeOneById(document: string, typeDocument: number):Observable<CustomerTypeOne>{

    return this.http.get(`${this.baseEndPoint}/c1/${document}?typeDocument=${typeDocument}`)
    .pipe(
      map(customerTypeOne => {
        return customerTypeOne as CustomerTypeOne;
      })
    );

  }

  // this method call data for page view customer-products
  public getCustomerTypeTwoById(document: string, typeDocument: number):Observable<CustomerTypeTwo>{

    return this.http.get(`${this.baseEndPoint}/c2/${document}?typeDocument=${typeDocument}`)
    .pipe(
      map(customerTypeTwo => {
        return customerTypeTwo as CustomerTypeTwo;
      })
    );

  }

  // this method call data for page view customer-update
  public getCustomerTypeThree(document: string, typeDocument: number):Observable<CustomerTypeThree>{

    return this.http.get(`${this.baseEndPoint}/c3/${document}?typeDocument=${typeDocument}`)
    .pipe(
      map(customerTypeThree => {
        return customerTypeThree as CustomerTypeThree;
      })
    );

  }

  // this method send data for page view customer-create to backend
  public createCustomer(customer: CustomerTypeThree):Observable<CustomerTypeThree>{

    return this.http.post(`${this.baseEndPoint}/new_customer`,customer,{headers: this.head})
    .pipe(
      map(customerTypeThree => {
        return customerTypeThree as CustomerTypeThree;
      })
    );

  }

  // this method send data for page view customer-update to backend
  public updateCustomer(customer: CustomerTypeThree):Observable<CustomerTypeThree>{

    return this.http.put(`${this.baseEndPoint}/c3/${customer.customerId}`,customer,{headers: this.head})
    .pipe(
      map(customerTypeThree => {
        return customerTypeThree as CustomerTypeThree;
      })
    );

  }
  
}
 