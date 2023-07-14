import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalEntradaComponent } from 'src/app/components/modalEntrada/modalEntrada.component';
import { ModalSaidaComponent } from 'src/app/components/modalSaida/modalSaida.component';
import { EstoqueService } from 'src/app/services/estoque.service';
import { MenuService } from 'src/app/services/menu.service';

declare var DataTable: any;
declare var $: any;

@Component({
  selector: 'app-ficha-estoque',
  templateUrl: './ficha-estoque.component.html',
  styleUrls: ['./ficha-estoque.component.scss']
})
export class FichaEstoqueComponent implements OnInit, AfterViewInit {
  produto: any[] = [];
  dataTableOptions: any = {};
  modalRef: MdbModalRef<ModalEntradaComponent> | null = null;

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    private estoqueService: EstoqueService,
    private modalService: MdbModalService
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

  ngAfterViewInit() {}

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
            return `<button class="btn btn-primary btn-sm entrada-button">Entrada</button>
                    <button class="btn btn-danger btn-sm saida-button">Saída</button>
                    <button class="btn btn-info btn-sm kardex-button">Kardex</button>`;
          }
        }
      ],
      paging: true,
      searching: true,
      ordering: true,
      info: true,
      responsive: true,
      lengthMenu: [10, 25, 50, 75, 100],
    };

    setTimeout(() => {
      const dataTable = document.querySelector('#datatable');
      if (dataTable) {
        const dataTableInstance = new DataTable(dataTable, this.dataTableOptions);

        $(dataTable).on('click', '.entrada-button', (event) => {
          const codigo = dataTableInstance.row($(event.target).closest('tr')).data().codigo;
          this.modalEntrada(codigo);
        });

        $(dataTable).on('click', '.saida-button', (event) => {
          const codigo = dataTableInstance.row($(event.target).closest('tr')).data().codigo;
          this.modalSaida(codigo);
        });

        $(dataTable).on('click', '.kardex-button', (event) => {
          const codigo = dataTableInstance.row($(event.target).closest('tr')).data().codigo;
          this.redirectToKardex(codigo);
        });
      }
    }, 0);
  }

  redirectToKardex(codigo: string) {
    window.location.href = `/kardex/${codigo}`;
  }

  modalEntrada(codigo	: string) {
    this.modalRef = this.modalService.open(ModalEntradaComponent)
  }

  modalSaida(codigo	: string) {
    this.modalRef = this.modalService.open(ModalSaidaComponent)
  }
}
