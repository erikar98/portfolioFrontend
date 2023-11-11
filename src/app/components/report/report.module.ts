import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListComponent } from './report-list/report-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    ReportListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ReportModule { }
