import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CutomerTypeOneListComponent } from './components/customer/cutomer-type-one-list/cutomer-type-one-list.component';
import { CutomerTypeTwoListComponent } from './components/customer/cutomer-type-two-list/cutomer-type-two-list.component';
import { CutomerTypeThreeUpdateComponent } from './components/customer/cutomer-type-three-update/cutomer-type-three-update.component';
import { CutomerTypeThreeCreateComponent } from './components/customer/cutomer-type-three-create/cutomer-type-three-create.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'customer-search'},
  {path: 'customer-search', component: CutomerTypeOneListComponent},
  {path: 'customer-view', component: CutomerTypeTwoListComponent},
  {path: 'customer-edit', component: CutomerTypeThreeUpdateComponent},
  {path: 'customer-create', component: CutomerTypeThreeCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
