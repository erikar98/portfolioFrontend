import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/models/product/product';
import { TypeProduct } from 'src/app/models/typeProduct/type-product';
import { CommunService } from 'src/app/services/commons/commun.service';
import { ProductService } from 'src/app/services/product/product.service';
import { TypeProductService } from 'src/app/services/typeProduct/type-product.service';
import { DatePipe } from '@angular/common';
import { ProductCreate } from 'src/app/models/product/dao/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

  visible = false;
  documentClient : string;

  typeProducts: TypeProduct[];
  selectedTypeProducts: TypeProduct;

  inTypeProduct: number;
  inDaysPastDue: number;
  inTotalDebt: number;
  date: Date;
  inNumBill:number;
  dateString: string;
  product: Product;

  constructor(private sharedDataService:CommunService,
    private serviceProduct: ProductService,
    private serviceTypeProducts: TypeProductService,
    private datePipe: DatePipe){

  }

  ngOnInit(){

    this.date = new Date();

    this.sharedDataService.openModalProduct$.subscribe((documentClient) => {
      this.openModalAddProduct(documentClient);
    });
    
    this.loadTypeProducts();

  }

  openModalAddProduct(documetClient: string){
    this.visible =true;
    this.documentClient= documetClient;
  }

  closeModalPayment(product: Product) {

    console.log("Pago nuevo: " + product);
    this.visible =false;
  }

  createProduct(productForm: NgForm){

    this.product = this.product || new Product();

    const formData = productForm.value;

    console.log("Formulario:", productForm);
    
    console.log("fecha:", formData.date);
    if (formData) {
      console.log("estamos en el if");
 
      this.dateString = this.datePipe.transform(this.date, 'yyyy-MM-dd'); 
      const productToCreate: ProductCreate = {
        productNumBill: formData.inNumBill,
        productTypeIdMaster: formData.inTypeProduct,
        totalDebt:  formData.inTotalDebt,
        dateProductPayment: this.dateString,
        daysPastDue: formData.inDaysPastDue,
        customerId: this.documentClient, 
        statusIdMaster: 1 
      };
      this.serviceProduct.createProduct(productToCreate)
      .subscribe(
        (product) => {
          this.product = product;
          console.log('Customer Type One:', this.product);
          this.closeModalPayment(product);
        }
      );

    }else{
      console.log("no entro al if");
    }

  }

  loadTypeProducts(){

    this.serviceTypeProducts.getAllTypeProducts().subscribe((typeProducts) => {
      this.typeProducts = typeProducts;
      console.log(typeProducts);
    });


  }

  getDateSelected() {
    console.log('Fecha seleccionada:', this.date);
    // Puedes hacer más cosas con la fecha seleccionada si es necesario
}

}
