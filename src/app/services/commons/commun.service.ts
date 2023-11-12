import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

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

  // elements for open modal
  private openModalPaymentSubject = new Subject<number>();

  openModalPayment$ = this.openModalPaymentSubject.asObservable();

  openModalPayment(productNumBill:number) {
    this.openModalPaymentSubject.next(productNumBill);
  }
}
