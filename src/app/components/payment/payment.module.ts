import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    PaymentListComponent,
    PaymentCreateComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class PaymentModule { }
