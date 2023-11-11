import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../../models/city/city';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  private baseEndPoint = `${environment.apiUrlBackend}/city`;

  constructor(private http: HttpClient) { }

  //this method call data for page customer-update and customer-create
  public getCitysByDepartmentIdDane(departmentIdDane: string):Observable<City[]>{

    return this.http.get<City[]>(`${this.baseEndPoint}/${departmentIdDane}`);

  }
}
