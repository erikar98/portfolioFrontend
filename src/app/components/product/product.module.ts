import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCreateComponent
  ],
  exports:[
    ProductListComponent,
    ProductCreateComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    CalendarModule
  ],
  providers:[DatePipe]
})
export class ProductModule { }
