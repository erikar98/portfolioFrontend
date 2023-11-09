import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CutomerTypeOneListComponent } from './cutomer-type-one-list/cutomer-type-one-list.component';
import { CutomerTypeTwoListComponent } from './cutomer-type-two-list/cutomer-type-two-list.component';
import { CutomerTypeThreeCreateComponent } from './cutomer-type-three-create/cutomer-type-three-create.component';
import { CutomerTypeThreeUpdateComponent } from './cutomer-type-three-update/cutomer-type-three-update.component';


@NgModule({
  declarations: [
    CutomerTypeOneListComponent,
    CutomerTypeTwoListComponent,
    CutomerTypeThreeCreateComponent,
    CutomerTypeThreeUpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
