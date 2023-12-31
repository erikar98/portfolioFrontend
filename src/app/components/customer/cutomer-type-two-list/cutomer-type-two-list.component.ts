import { Component } from '@angular/core';
import { CustomerTypeTwo } from 'src/app/models/customer/customer-type-two';
import { ProductResponse } from 'src/app/models/product/dao/product-response';
import { Product } from 'src/app/models/product/product';
import { CommunService } from 'src/app/services/commons/commun.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-cutomer-type-two-list',
  templateUrl: './cutomer-type-two-list.component.html',
  styleUrls: ['./cutomer-type-two-list.component.scss']
})
export class CutomerTypeTwoListComponent {

  datos: any;
  customerTypeTwoArray: CustomerTypeTwo[] = [];
  products: Product[] = [];
  totalRecords: number = 0;

  productToPay: Product;

  constructor(
    private sharedDataService:CommunService,
    private serviceCustomer: CustomerService,
    private serviceProduct: ProductService){
    }

  ngOnInit(){
    this.sharedDataService.datos$.subscribe(datos => {
      this.datos = datos;
      console.log(datos);
    });

    this.sharedDataService.openModalPayment$.subscribe(datos => {
      this.datos = datos;
      console.log(datos);
    });

    this.sharedDataService.openModalProduct$.subscribe( () => {
      console.log('Se abrió la modal de producto');
    });

    this.sharedDataService.modalClosed$.subscribe(datos => {
      this.datos = datos;
      console.log("recargando productos " + this.datos);
      //this.datos.document = this.datos;
      this.serviceProduct.getProductByCustomerId(this.datos,'0','10')
      .subscribe((product: ProductResponse) => {
        this.products = product.content;
        this.totalRecords = product.totalElements;
        console.log(this.products);
      });
    });

    this.loadCustomerTypeTwo();

    this.loadProductsByCustomer();
  }

  loadCustomerTypeTwo() {
    
    if (this.datos) {

      console.log("estamos en el if");
      this.serviceCustomer.getCustomerTypeTwoById(this.datos.document, this.datos.typeDocument)
      .subscribe(
        (customerTypeTwoArray) => {
          console.log('Customer Type Two:', customerTypeTwoArray);

          if (customerTypeTwoArray && customerTypeTwoArray instanceof Array && customerTypeTwoArray.length > 0) {
            this.customerTypeTwoArray = customerTypeTwoArray;
            console.log('Assigned Customer Type Two:', this.customerTypeTwoArray);
          } else {
            console.log('El array está vacío o no tiene elementos.');
          }
        }
      );

    }else{
      console.log("no entro al if");
    }
    
  }

  loadProductsByCustomer(){
  
    this.serviceProduct.getProductByCustomerId(this.datos.document,'0','10')
    .subscribe((product: ProductResponse) => {
      this.products = product.content;
      this.totalRecords = product.totalElements;
      console.log(this.products);
    });


  }

  openModalPaymentService(productNumBill: number,productTypeName: string,daysPastDue: number,dateProductPayment:string,totalDebt :number) {
    this.productToPay = this.productToPay || new Product;

    this.productToPay.productNumBill = productNumBill;
    this.productToPay.productTypeName = productTypeName;
    this.productToPay.daysPastDue = daysPastDue;
    this.productToPay.dateProductPayment = dateProductPayment;
    this.productToPay.totalDebt = totalDebt;

    console.log("Se esta enviando a la modal el objeto: " + this.productToPay)

    this.sharedDataService.openModalPayment(this.productToPay);


  }

  openModalProductService(document: string) {
    this.sharedDataService.openModalProduct(document);
  }
  


}
