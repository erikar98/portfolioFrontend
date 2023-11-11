import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Payment } from '../../models/payment/payment';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseEndPoint = `${environment.apiUrlBackend}/payment`;

  private head: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  //this method call data for page payment/list-payments
  public getAllPaymentByCustomer(document: string, typeDocument: number) :
  Observable<Payment[]>{

    return this.http.get(`${this.baseEndPoint}/${document}?typeDocument=${typeDocument}`)
      .pipe(
        map(payments => {
          return payments as Payment[];
        })
      );

  }

  //this method send data for page view to bakcend customer-view/list-products/new-payment'
  public createPayment(payment: Payment): Observable<Payment> {

    return this.http.post(`${this.baseEndPoint}/new_payment`, payment, { headers: this.head })
      .pipe(
        map(payment => {
          return payment as Payment;
        })
      );

  }
}
