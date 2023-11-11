import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from '../../models/department/department';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private baseEndPoint = `${environment.apiUrlBackend}/department`;

  constructor(private http: HttpClient) { }

  //this method call all department for the list
  public getAllDepartments():
  Observable<Department[]>{

    return this.http.get<Department[]>(`${this.baseEndPoint}`);
  }
}
