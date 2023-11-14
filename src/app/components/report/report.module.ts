import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportListComponent } from './report-list/report-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';


@NgModule({
  declarations: [
    ReportListComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    TableModule,
    PaginatorModule
  ]
})
export class ReportModule { }
