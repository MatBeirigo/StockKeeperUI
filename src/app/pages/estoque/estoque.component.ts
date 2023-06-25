import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent {
  constructor(public menuService: MenuService) 
  { 

  }

  ngOnInit() {
    this.menuService.menuSelecionado = 20;
  }
}
