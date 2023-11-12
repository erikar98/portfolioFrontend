import { Component } from '@angular/core';
import { CommunService } from 'src/app/services/commons/commun.service';

@Component({
  selector: 'app-payment-create',
  templateUrl: './payment-create.component.html',
  styleUrls: ['./payment-create.component.scss']
})
export class PaymentCreateComponent {
  visible = false;

  constructor(private sharedDataService:CommunService){

    this.sharedDataService.openModalPayment$.subscribe((productNumBill) => {
      this.openModalPayment(productNumBill);
    });

  }


  openModalPayment(productNumBill) {
    this.visible =true;
  }


}
