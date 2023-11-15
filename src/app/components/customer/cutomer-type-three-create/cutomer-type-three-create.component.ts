import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cutomer-type-three-create',
  templateUrl: './cutomer-type-three-create.component.html',
  styleUrls: ['./cutomer-type-three-create.component.scss']
})
export class CutomerTypeThreeCreateComponent {
  datos: any;

  customerTypeThreeArray: CustomerTypeThree[] = [];

  typeDocument: TypeDocument[];
  selectedTypeDocument: TypeDocument;

  department: Department[];
  selectedDepartment: Department;

  city: City[];
  selectedCity: City;


  customer: CustomerTypeThree;
  customertoCreate: CustomerTypeThreeUpdate;

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

  createCustomer(customerForm: NgForm){
    this.customertoCreate = this.customer || new CustomerTypeThree();

    const formData = customerForm.value;

    console.log("Formulario:", customerForm);
    
    console.log("fecha:", formData.date);
    if (formData) {
      console.log("estamos en el if");

      const customerToCreate: CustomerTypeThreeUpdate = {
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
      this.serviceCustomer.createCustomer(customerToCreate)
      .subscribe(
        (customerNew) => {
          this.customer = customerNew;
          console.log('Customer Type One:', this.customer);
          this.showModalSwalSucces();
        }
      );

    }else{
      console.log("no entro al if");
    }
  }

  showModalSwalSucces(){
    Swal.fire({
      title: 'Muy bien!!',
      text: 'Registro creado con éxito',
      icon: 'success'
    });
  }

  showModalSwalError(){
    Swal.fire({
      title: 'Ups!!',
      text: 'El registro no pudo ser creado',
      icon: 'error'
    });
  }
}
