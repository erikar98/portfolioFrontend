import { Component, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';
import { ReportResponse } from 'src/app/models/report/dao/report-response';
import { Report } from 'src/app/models/report/report';
import { ReportService } from 'src/app/services/report/report.service';
import * as Papa from 'papaparse';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent {

  @ViewChild('dataTable') dataTable: Table;

  reports: Report[]=[];


  constructor(private serviceReport: ReportService){}

  ngOnInit(){
    this.loadReport();
  }

  loadReport(){

    this.serviceReport.getReport('0','10').subscribe((report: ReportResponse)=>{
      this.reports = report.content;
      console.log(this.reports);
    })
  }

  exportToCSV(): void {
    
    const dataToExport = this.dataTable.value;

    
    const csvData = Papa.unparse(dataToExport, {
      quotes: true,  
      delimiter: '|', 
    });

    // Convierte el CSV en un blob
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

    // Descarga el archivo
    FileSaver.saveAs(blob, 'exported_data.csv');
  }

}
