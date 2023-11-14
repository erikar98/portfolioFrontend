import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentHistorialResponse } from 'src/app/models/payment/dao/payment-historial-response';
import { Payment } from 'src/app/models/payment/payment';
import { TypeDocument } from 'src/app/models/typeDocument/type-document';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { TypeDocumentService } from 'src/app/services/typeDocument/type-document.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent {

  paymentArray: Payment[] = [];

  typeDocuments: TypeDocument[];
  selectedTypeDocument: TypeDocument;

  inTypeDocument: number;
  inDocument: string;

  payments: Payment[] = [];

  totalRecords: number = 0;

  constructor(private serviceTypeDocument: TypeDocumentService,
    private servicePayment: PaymentService){}

  ngOnInit(){
    this.loadTypeDocuments();
  }

  loadTypeDocuments(){

    this.serviceTypeDocument.getAllDocumentTypes().subscribe((typeDocuments) => {
      this.typeDocuments = typeDocuments;
      console.log(typeDocuments);
    });


  }

  loadPaymentHistorial(customerForm: NgForm){

    const formData = customerForm.value;

    console.log("Formulario:", customerForm);

    console.log("datos enviado:" +formData.document+ " - " + formData.inTypeDocument)

    this.servicePayment.getAllPaymentByCustomer(formData.inDocument, formData.inTypeDocument,'0','10')
    .subscribe((payment: PaymentHistorialResponse) => {
      this.payments = payment.content;
      this.totalRecords = payment.totalElements;
      console.log(this.payments);
    });

  }

}
