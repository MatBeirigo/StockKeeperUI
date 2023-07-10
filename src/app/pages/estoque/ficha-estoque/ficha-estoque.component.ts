import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EstoqueService } from 'src/app/services/estoque.service';
import { MenuService } from 'src/app/services/menu.service';

declare var DataTable: any;

@Component({
  selector: 'app-ficha-estoque',
  templateUrl: './ficha-estoque.component.html',
  styleUrls: ['./ficha-estoque.component.scss']
})
export class FichaEstoqueComponent implements OnInit, AfterViewInit {
  produto: any[] = [];
  dataTableOptions: any = {};

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    private estoqueService: EstoqueService
  ) { }

  ngOnInit() {
    this.menuService.menuSelecionado = 22;

    this.estoqueService.ListarProdutos().subscribe(
      (produto: any[]) => {
        this.produto = produto;
        this.initializeDataTable();
      },
      error => {
        console.error('Ocorreu um erro ao carregar os produtos:', error);
      }
    );
  }

  ngAfterViewInit() {
    // Remova a chamada para initializeDataTable() aqui
  }

  initializeDataTable() {
    this.dataTableOptions = {
      data: this.produto,
      columns: [
        { title: 'Código', data: 'codigo' },
        { title: 'Nome do Produto', data: 'nomeProduto' },
        { title: 'Descrição', data: 'descricao' },
        { title: 'Unidade', data: 'unidade' },
        { title: 'Fornecedor', data: 'fornecedor' },
        {
          title: 'Ações',
          render: (data: any, type: any, full: any) => {
            return `<button class="btn btn-primary btn-sm" onclick="editar(${full.codigo})">Entrada</button>
                    <button class="btn btn-danger btn-sm" onclick="excluir(${full.codigo})">Saída</button>
                    <button class="btn btn-info btn-sm" onclick="kardex(${full.codigo})">Kardex</button>`;
          }
        }
      ],
      paging: true,
      searching: true,
      ordering: true,
      info: true
    };

    setTimeout(() => {
      const dataTable = document.querySelector('#datatable');
      if (dataTable) {
        new DataTable(dataTable, this.dataTableOptions);
      }
    }, 0);
  }
}
