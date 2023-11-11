import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CutomerTypeOneListComponent } from './components/customer/cutomer-type-one-list/cutomer-type-one-list.component';
import { CutomerTypeTwoListComponent } from './components/customer/cutomer-type-two-list/cutomer-type-two-list.component';
import { CutomerTypeThreeUpdateComponent } from './components/customer/cutomer-type-three-update/cutomer-type-three-update.component';
import { CutomerTypeThreeCreateComponent } from './components/customer/cutomer-type-three-create/cutomer-type-three-create.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { PaymentCreateComponent } from './components/payment/payment-create/payment-create.component';
import { PaymentListComponent } from './components/payment/payment-list/payment-list.component';
import { ReportListComponent } from './components/report/report-list/report-list.component';

const routes: Routes = [
  /*Rout default*/
  {path: '', pathMatch:'full', redirectTo:'customer-search'},
  /*Rout for customer*/
  {path: 'customer-search', component: CutomerTypeOneListComponent},
  {path: 'customer-view', component: CutomerTypeTwoListComponent},
  {path: 'customer-edit', component: CutomerTypeThreeUpdateComponent},
  {path: 'customer-create', component: CutomerTypeThreeCreateComponent},
  /*Rout for products*/
  {path: 'customer-view/list-products', component: ProductListComponent},
  {path: 'customer-view/list-products/new-product', component: ProductCreateComponent},
  /*Rout for payment*/
  {path: 'customer-view/list-products/new-payment', component: PaymentCreateComponent},
  {path: 'payment/list-payments', component: PaymentListComponent},
  /*Rout for report*/
  {path: 'report/list-report', component: ReportListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
