import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    PaymentListComponent,
    PaymentCreateComponent
  ],
  exports:[
    PaymentCreateComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule
  ]
})
export class PaymentModule { }
