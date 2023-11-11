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
      label: 'Cartera de Clientes',
      icon: 'pi pi-user',
      routerLink: '/customer-search'
    },
    {
      label: 'Historial de Pagos',
      icon: ' pi pi-dollar',
      routerLink: '/payment/list-payments'
    },
    {
      label: 'Reportes',
      icon: 'pi pi-chart-bar',
      routerLink: '/report/list-report'
    }
  ];

}
