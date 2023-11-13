import { Component } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { CommunService } from 'src/app/services/commons/commun.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent {

  visible = false;

  constructor(private sharedDataService:CommunService,
    private serviceProduct: ProductService){

    this.sharedDataService.openModalProduct$.subscribe(() => {
      this.openModalAddProduct();
    });
  }

  openModalAddProduct(){
    this.visible =true;
  }

  closeModalPayment(product: Product) {

    console.log("Pago nuevo: " + product);
    this.visible =false;
  }

  createProduct(product: Product){
    this.serviceProduct.createProduct(product).subscribe((product) => {
      this.closeModalPayment(product);
    });
  }

}
