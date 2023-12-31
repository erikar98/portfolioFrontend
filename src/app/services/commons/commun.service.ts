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

  // elements for send data customer-search to customer-edit

  private datosSubjectEdit = new BehaviorSubject<any>(null);
  datosEdit$: Observable<any> = this.datosSubjectEdit.asObservable();

  sendDataEdit(nuevosDatos: any): void {
    this.datosSubjectEdit.next(nuevosDatos);
    this.router.navigate(['/customer-edit']);
  }

  // elements for send data customer-search to customer-edit

  private datosSubjectCreate = new BehaviorSubject<void>(null);
  datosCreate$: Observable<any> = this.datosSubjectCreate.asObservable();

  sendDataCreate(): void {
    this.datosSubjectCreate.next();
    this.router.navigate(['/customer-create']);
  }

  // element for table products reload
  private modalCloseSource = new Subject<string>();

  modalClosed$ = this.modalCloseSource.asObservable();

  nofitfyModalClose(document: string) {
    this.modalCloseSource.next(document);
  }

  // elements for open modal payment
  private openModalPaymentSubject = new Subject<Product>();

  openModalPayment$ = this.openModalPaymentSubject.asObservable();

  openModalPayment(product: Product ) {
    this.openModalPaymentSubject.next(product);
  }

  // elements for open modal add product
  private openModalProductSubject = new Subject<string>();

  openModalProduct$ = this.openModalProductSubject.asObservable();

  openModalProduct(document: string) {
    this.openModalProductSubject.next(document);
  }
}
