import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentListComponent } from './payment-list/payment-list.component';
import { PaymentCreateComponent } from './payment-create/payment-create.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
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
    ButtonModule,
    TabViewModule,
    FormsModule,
    TableModule,
    PaginatorModule
  ]
})
export class PaymentModule { }
