import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PunihsmentService {

  private baseEndPoint = `${environment.apiUrlBackend}/update-portfolio`;

  constructor(private http: HttpClient) { }


  //this method excecute package update data portfolio
  public updatePorfolio() :
  Observable<number>{

    return this.http.get(`${this.baseEndPoint}`)
      .pipe(
        map(status => {
          console.log(status);
          return status as any;
          
        })
      );

  }
}
