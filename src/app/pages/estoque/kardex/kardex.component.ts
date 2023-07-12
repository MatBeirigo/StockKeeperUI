import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { KardexService } from 'src/app/services/kardex.service';
import { MenuService } from 'src/app/services/menu.service';
@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit, AfterViewInit {
  produto: any[];
  estoque: any;

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private kardexService: KardexService
  ) { }

  ngOnInit() {
    this.menuService.menuSelecionado = 21;

    this.route.paramMap.subscribe(params => {
      const codigo = params.get('codigo');
      this.kardexService.ProcurarProdutoNoEstoque(codigo).subscribe(
        (estoque: any) => {
          this.estoque = estoque;
          console.log('estoque: ', estoque);
        },
        error => {
          console.error('Ocorreu um erro ao buscar o produto no estoque: ', error);
        }
      );
    });
  }
  ngAfterViewInit() {}
}
