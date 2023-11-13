import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Product } from 'src/app/models/product/product';

@Injectable({
  providedIn: 'root'
})
export class CommunService {

  constructor(private router: Router) { }

  // elements for send data customer-search to customer-view

  private datosSubject = new BehaviorSubject<any>(null);
  datos$: Observable<any> = this.datosSubject.asObservable();

  sendData(nuevosDatos: any): void {
    this.datosSubject.next(nuevosDatos);
    this.router.navigate(['/customer-view']);
  }

  // elements for open modal payment
  private openModalPaymentSubject = new Subject<Product>();

  openModalPayment$ = this.openModalPaymentSubject.asObservable();

  openModalPayment(product: Product ) {
    this.openModalPaymentSubject.next(product);
  }

  // elements for open modal add product
  private openModalProductSubject = new Subject<void>();

  openModalProduct$ = this.openModalProductSubject.asObservable();

  openModalProduct() {
    this.openModalProductSubject.next();
  }
}
