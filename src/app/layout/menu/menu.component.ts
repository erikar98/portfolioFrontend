import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  sidebarVisible: boolean = false;

  items: MenuItem[] = [
    {
      label: 'Clientes',
      routerLink: '/customer-search'
    },
    {
      label: 'Productos',
      routerLink: '/inicio'
    },
    {
      label: 'Pagos',
      routerLink: '/inicio'
    },
    {
      label: 'Reportes',
      routerLink: '/inicio'
    }
  ];

}
