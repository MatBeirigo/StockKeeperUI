import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  constructor(private router: Router, public menuService: MenuService) 
  { 

  }

  ngOnInit() {
    this.menuService.menuSelecionado = 10;
  }

  selectMenu(menu:number){
    switch(menu){
      case 10:
        this.router.navigate(['/dashboard']);
        break;
      case 20:
        this.router.navigate(['/estoque']);
        break;
      case 30:
        this.router.navigate(['/comercial']);
        break;
      case 40:
        this.router.navigate(['/checkout']);
        break;
      default:
        break;
    }
    this.menuService.menuSelecionado = menu;
  }
}
