import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Produto } from 'src/app/models/produto.model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.scss']
})
export class EstoqueComponent {
  produto: Produto[];

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    ) {}

    ngOnInit() {
      this.menuService.menuSelecionado = 20;
    }
}
