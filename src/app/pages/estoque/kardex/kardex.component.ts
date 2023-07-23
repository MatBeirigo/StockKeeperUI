import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { KardexService } from 'src/app/services/kardex.service';
import { MenuService } from 'src/app/services/menu.service';

declare var DataTable: any;

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {
  kardex: any[];
  dataTableOptions: any = {};
  productName: string;

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private kardexService: KardexService,
  ) { }

  ngOnInit() {
    this.menuService.menuSelecionado = 21;

    this.route.paramMap.subscribe(params => {
      const id = params.get('codigo');
      this.kardexService.ProcurarKardex(id).subscribe(
        (kardex: any) => {
          this.kardex = kardex.map(item => ({
            ...item,
            dataAlteracao: new Date(item.dataAlteracao).toLocaleDateString(),
            valorUnitarioEntrada: item.valorUnitarioEntrada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            valorTotalEntrada: item.valorTotalEntrada.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            valorUnitarioSaida: item.valorUnitarioSaida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            valorTotalSaida: item.valorTotalSaida.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            valorUnitarioSaldo: item.valorUnitarioSaldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
            valorTotalSaldo: item.valorTotalSaldo.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
          }));
          this.productName = this.kardex[0].produto;
          this.initializeDataTable();
        },
        error => {
          console.error('Ocorreu um erro ao buscar o produto no estoque: ', error);
        }
      );
    });
  }

  initializeDataTable() {
    this.dataTableOptions = {
      data: this.kardex,
      columns: [
        { title: 'Data', data: 'dataAlteracao' },
        { title: 'Tipo Alteracao', data: 'tipoAlteracao' },
        { title: 'Quantidade Entrada', data: 'quantidadeEntrada' },
        { title: 'Valor Unitário Entrada', data: 'valorUnitarioEntrada' },
        { title: 'Valor Total Entrada', data: 'valorTotalEntrada' },
        { title: 'Quantidade Saída', data: 'quantidadeSaida' },
        { title: 'Valor Unitário Saída', data: 'valorUnitarioSaida' },
        { title: 'Valor Total Saída', data: 'valorTotalSaida' },
        { title: 'Quantidade Saldo', data: 'quantidadeSaldo' },
        { title: 'Valor Unitário Saldo', data: 'valorUnitarioSaldo' },
        { title: 'Valor Total Saldo', data: 'valorTotalSaldo' },
      ],
      paging: true,
      searching: true,
      ordering: true,
      info: true,
      responsive: true,
      lengthMenu: [10, 25, 50, 75, 100],
    };

    setTimeout(() => {
      const dataTable = document.querySelector('#datatableKardex');
      if (dataTable) {
        const dataTableInstance = new DataTable(dataTable, this.dataTableOptions);
      }
    }, 0);
  }
}
