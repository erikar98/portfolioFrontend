import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ReportResponse } from 'src/app/models/report/dao/report-response';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReportService {



  private baseEndPoint = `${environment.apiUrlBackend}/report`;


  constructor(private http: HttpClient) { }

    //this method call data for page report
    public getReport(page :string, size: string) :
    Observable<ReportResponse>{
  
      const params = new HttpParams()
      .set('page', page)
      .set('size', size);
  
      return this.http.get(`${this.baseEndPoint}`,{params: params})
        .pipe(
          map(report => {
            return report as any;
          })
        );
  
    }
}
