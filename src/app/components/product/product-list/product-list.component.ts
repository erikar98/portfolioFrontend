import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  products: Product[];

  constructor(private service: ProductService){}


  ngOnInit(){

    /*this.service.getProductByCustomerId(document: String).subscribe(producst => {
      this.products = producst;
    });*/

  }
}
