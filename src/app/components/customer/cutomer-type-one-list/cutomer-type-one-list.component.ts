import { Component } from '@angular/core';
import { CustomerTypeOne } from 'src/app/models/customer/customer-type-one';
import { TypeDocument } from 'src/app/models/typeDocument/type-document';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { TypeDocumentService } from 'src/app/services/typeDocument/type-document.service';
import { NgForm } from '@angular/forms';
import { CommunService } from 'src/app/services/commons/commun.service';
import { PunihsmentService } from 'src/app/services/punishment/punihsment.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cutomer-type-one-list',
  templateUrl: './cutomer-type-one-list.component.html',
  styleUrls: ['./cutomer-type-one-list.component.scss']
})
export class CutomerTypeOneListComponent{

  result: number;
  typeDocuments: TypeDocument[];
  selectedTypeDocument: TypeDocument;

  inTypeDocument: number;
  inDocument: string;

  customerTypeOneArray: CustomerTypeOne[] = [];
  
  constructor(
    private serviceCustomer: CustomerService,
    private serviceTypeDocument: TypeDocumentService,
    private sharedDataService: CommunService,
    private sahredPunishmentService: PunihsmentService){

    
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

  updatePortfolioData(){
    this.sahredPunishmentService.updatePorfolio().subscribe((result) => {
      this.result = result;
      console.log("Respuesta proceso masivo" + result);
    });
    
  }

  navigateCustomerProducts(document: string, typeDocument: number): void {
    const datos = { document, typeDocument };
    this.sharedDataService.sendData(datos);
    //this.router.navigate(['/customer-view', navigationExtras]);
  }

  navigateCustomerEdit(document: string, typeDocument: number): void {
    const datos = { document, typeDocument };
    this.sharedDataService.sendDataEdit(datos);
    //this.router.navigate(['/customer-edit', navigationExtras]);
  }

  navigateCreateCustomer(): void {
    this.sharedDataService.sendDataCreate();
    //this.router.navigate(['/customer-edit', navigationExtras]);
  }

  showModalSwalSucces(){
    Swal.fire({
      title: 'Muy bien!!',
      text: 'Pago registrado con éxito',
      icon: 'success'
    });
  }

  showModalSwalError(){
    Swal.fire({
      title: 'Ups!!',
      text: 'El cliente no existe',
      icon: 'warning'
    });
  }

}
