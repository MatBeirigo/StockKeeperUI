import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-comercial',
  templateUrl: './comercial.component.html',
  styleUrls: ['./comercial.component.scss']
})
export class ComercialComponent {
  constructor(public menuService: MenuService) 
  { 

  }

  ngOnInit() {
    this.menuService.menuSelecionado = 30;
  }
}
