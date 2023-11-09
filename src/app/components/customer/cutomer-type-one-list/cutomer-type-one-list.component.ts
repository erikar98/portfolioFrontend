import { Component } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-cutomer-type-one-list',
  templateUrl: './cutomer-type-one-list.component.html',
  styleUrls: ['./cutomer-type-one-list.component.scss']
})
export class CutomerTypeOneListComponent {

  constructor(private service: CustomerService){}

  

  
}
