import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { TypeDocument } from 'src/app/models/typeDocument/type-document';

@Injectable({
  providedIn: 'root'
})
export class TypeDocumentService {

  private baseEndPoint = `${environment.apiUrlBackend}/document_type`;

  constructor(private http: HttpClient) { }

  //this method call data for page customer-update and customer-create
  public getAllDocumentTypes():Observable<TypeDocument[]>{

    return this.http.get<TypeDocument[]>(`${this.baseEndPoint}`);

  }
}
