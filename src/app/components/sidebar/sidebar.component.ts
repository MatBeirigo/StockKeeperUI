import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  subMenus: { [key: string]: boolean } = {};

  constructor(private router: Router, public menuService: MenuService) { }

  selectMenu(menu: number) {
    switch (menu) {
      case 10:
        this.router.navigate(['/dashboard']);
        break;
      case 20:
        this.router.navigate(['/estoque']);
        break;
      case 21:
        this.router.navigate(['/fichaestoque']);
        break;
      case 22:
        this.router.navigate(['/cadastroprodutos']);
        break;
      case 23:
        this.router.navigate(['/cadastrofornecedor']);
        break;
      case 30:
        this.router.navigate(['/comercial']);
        break;
      case 40:
        this.router.navigate(['/checkout']);
        break;
      case 80:
        this.router.navigate(['/configuracoes']);
        break;
      case 90:
        this.router.navigate(['/suporte']);
        break;
      default:
        break;
    }
    this.menuService.menuSelecionado = menu;
  }

  toggleSubMenu(event: Event) {
    event.stopPropagation();

    if (this.menuService.submenuOpen) {
      this.menuService.closeSubMenu();
    } else {
      this.menuService.openSubMenu();
    }
  }
}
