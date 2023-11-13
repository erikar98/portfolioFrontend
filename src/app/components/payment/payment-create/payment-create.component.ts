import { Component } from '@angular/core';
import { Payment } from 'src/app/models/payment/payment';
import { Product } from 'src/app/models/product/product';
import { CommunService } from 'src/app/services/commons/commun.service';
import { PaymentService } from 'src/app/services/payment/payment.service';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.scss']
})
export class PaymentCreateComponent {
  visible = false;

  productToPay: Product;
  paymentToDo: Payment;

  constructor(private sharedDataService:CommunService,
    private servicePayment: PaymentService){

    this.sharedDataService.openModalPayment$.subscribe((productToPay) => {
      this.openModalPayment(productToPay);
    });

  }

  openModalPayment(productToPay: Product) {

    console.log("Llegó el objeto: "+ productToPay);
    this.productToPay = productToPay;
    this.visible =true;
  }

  closeModalPayment(payment: Payment) {

    console.log("Pago nuevo: " + payment);
    this.visible =false;
  }

  createPayment(productNumBill:number, totalPayment: number){

    this.paymentToDo = this.paymentToDo || new Payment;

    this.paymentToDo.productNumBill = productNumBill;
    this.paymentToDo.totalPayment = totalPayment;

    this.servicePayment.createPayment(this.paymentToDo).subscribe((payment) => {
      this.closeModalPayment(payment);
    });
  }


}
