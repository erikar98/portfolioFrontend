import { Component } from '@angular/core';
import { CustomerTypeOne } from 'src/app/models/customer/customer-type-one';
import { TypeDocument } from 'src/app/models/typeDocument/type-document';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { TypeDocumentService } from 'src/app/services/typeDocument/type-document.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-cutomer-type-one-list',
  templateUrl: './cutomer-type-one-list.component.html',
  styleUrls: ['./cutomer-type-one-list.component.scss']
})
export class CutomerTypeOneListComponent{

  typeDocuments: TypeDocument[];
  selectedTypeDocument: TypeDocument;

  inTypeDocument: number;
  inDocument: string;

  customerTypeOneArray: CustomerTypeOne[] = [];
  
  constructor(
    private serviceCustomer: CustomerService,
    private serviceTypeDocument: TypeDocumentService){

    
  }

  ngOnInit(){
    
    this.loadTypeDocuments();

  }

  loadTypeDocuments(){

    this.serviceTypeDocument.getAllDocumentTypes().subscribe((typeDocuments) => {
      this.typeDocuments = typeDocuments;
      console.log(typeDocuments);
    });


  }

  loadCustomerTypeOne(customerForm: NgForm) {
    
    const formData = customerForm.value;

    console.log("Formulario:", customerForm);
    
    console.log("formData"+ this.inDocument +" - "+ this.inTypeDocument);


    if (formData.inDocument && formData.inTypeDocument) {
      console.log("estamos en el if");
      this.serviceCustomer.getCustomerTypeOneById(formData.inDocument, formData.inTypeDocument)
      .subscribe(
        (customerTypeOne) => {
          this.customerTypeOneArray = [customerTypeOne];
          console.log('Customer Type One:', this.customerTypeOneArray);
        }
      );

    }else{
      console.log("no entro al if");
    }
    
  }

}
