import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CutomerTypeOneListComponent } from './cutomer-type-one-list/cutomer-type-one-list.component';
import { CutomerTypeTwoListComponent } from './cutomer-type-two-list/cutomer-type-two-list.component';
import { CutomerTypeThreeCreateComponent } from './cutomer-type-three-create/cutomer-type-three-create.component';
import { CutomerTypeThreeUpdateComponent } from './cutomer-type-three-update/cutomer-type-three-update.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { PaymentModule } from '../payment/payment.module';
import { ProductModule } from '../product/product.module';


@NgModule({
  declarations: [
    CutomerTypeOneListComponent,
    CutomerTypeTwoListComponent,
    CutomerTypeThreeCreateComponent,
    CutomerTypeThreeUpdateComponent
  ],
  exports:[
    CutomerTypeTwoListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    TabViewModule,
    ButtonModule,
    FormsModule,
    DropdownModule,
    TableModule,
    PaginatorModule,
    PaymentModule,
    ProductModule
  ]
})
export class CustomerModule { }
