import { Component } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { City } from 'src/app/models/city/city';
import { CustomerTypeThree } from 'src/app/models/customer/customer-type-three';
import { CustomerTypeThreeUpdate } from 'src/app/models/customer/dao/customer-type-three';
import { Department } from 'src/app/models/department/department';
import { TypeDocument } from 'src/app/models/typeDocument/type-document';
import { CityService } from 'src/app/services/city/city.service';
import { CommunService } from 'src/app/services/commons/commun.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { DepartmentService } from 'src/app/services/department/department.service';
import { TypeDocumentService } from 'src/app/services/typeDocument/type-document.service';

@Component({
  selector: 'app-cutomer-type-three-update',
  templateUrl: './cutomer-type-three-update.component.html',
  styleUrls: ['./cutomer-type-three-update.component.scss']
})
export class CutomerTypeThreeUpdateComponent {

  datos: any;

  customerTypeThreeArray: CustomerTypeThree[] = [];

  typeDocument: TypeDocument[];
  selectedTypeDocument: TypeDocument;

  department: Department[];
  selectedDepartment: Department;

  city: City[];
  selectedCity: City;


  customer: CustomerTypeThree;

  inDocument: string;
  inFirstName: string;
  inAddress: string;
  inSecondName: string;
  inPhoneNumber: number;
  inLastName: string;
  inEmail: string;
  inSecondLastName: string;


  constructor(private serviceTypeDocument: TypeDocumentService,
    private serviceDepartment: DepartmentService,
    private serviceCity: CityService,
    private sharedDataService: CommunService,
    private serviceCustomer: CustomerService){
  }

  ngOnInit(){


    this.sharedDataService.datosEdit$.subscribe(datos => {
      this.datos = datos;
      console.log(datos);
    });
    
    
    this.loadTypeDocuments();
    this.loadDepartment();
    this.loadCustomerData();

  }

  loadTypeDocuments(){

    this.serviceTypeDocument.getAllDocumentTypes().subscribe((typeDocuments) => {
      this.typeDocument = typeDocuments;
      console.log(typeDocuments);
    });


  }

  loadDepartment(){

    this.serviceDepartment.getAllDepartments().subscribe((departments) => {
      this.department = departments;
      console.log(departments);
    });


  }

  loadCity(departmentIdDane: string){

    this.serviceCity.getCitysByDepartmentIdDane(departmentIdDane).subscribe((citys) => {
      this.city = citys;
      console.log(citys);
    });


  }

  loadCustomerData(){

    if(this.datos){
      this.serviceCustomer.getCustomerTypeThree(this.datos.document, this.datos.typeDocument)
      .subscribe(
        (customerTypeThreeArray) => {
          console.log('Customer Type Two:', customerTypeThreeArray);

          if (customerTypeThreeArray && customerTypeThreeArray instanceof Array && customerTypeThreeArray.length > 0) {
            this.customerTypeThreeArray = customerTypeThreeArray;
            console.log('Assigned Customer Type Two:', this.customerTypeThreeArray);
            console.log("el document es:"  +customerTypeThreeArray[0].document)
            this.selectedTypeDocument = customerTypeThreeArray[0].documentTypeIdMaster;
            this.selectedDepartment = customerTypeThreeArray[0].departmentIdDane;
            this.loadCity(customerTypeThreeArray[0].departmentIdDane)
            this.inDocument = customerTypeThreeArray[0].document;
            this.selectedCity = customerTypeThreeArray[0].cityIdDane;
            this.inFirstName = customerTypeThreeArray[0].firstName;
            this.inAddress = customerTypeThreeArray[0].address;
            this.inSecondName = customerTypeThreeArray[0].secondName;
            this.inPhoneNumber = customerTypeThreeArray[0].phoneNumber;
            this.inLastName = customerTypeThreeArray[0].lastName;
            this.inEmail = customerTypeThreeArray[0].email;
            this.inSecondLastName = customerTypeThreeArray[0].secondLastName;

          } else {
            console.log('El array está vacío o no tiene elementos.');
          }
        }
      );

    }else{
      console.log("no entro al if");
    }



    
  }

  updateDataCustomer(customerForm: NgForm){

    this.customer = this.customer || new CustomerTypeThree();

    const formData = customerForm.value;

    console.log("Formulario:", customerForm);
    
    console.log("fecha:", formData.date);
    if (formData) {
      console.log("estamos en el if");
 
      const customerToUpdate: CustomerTypeThreeUpdate = {
        firstName: formData.inFirstName,
        secondName: formData.inSecondName,
        lastName: formData.inLastName,
        secondLastName: formData.inSecondLastName,
        documentTypeIdMaster: formData.inTypeDocument,
        document: formData.inDocument,
        address: formData.inAddress,
        departmentIdDane: formData.inDepartment,
        cityIdDane: formData.inCity,
        email: formData.inEmail,
        phoneNumber: formData.inPhoneNumber
      };
      this.serviceCustomer.updateCustomer(customerToUpdate).subscribe((customer) => {
        this.customerTypeThreeArray = [customer];
        console.log(customer);
      });

    }else{
      console.log("no entro al if");
    }

    
  }
}
