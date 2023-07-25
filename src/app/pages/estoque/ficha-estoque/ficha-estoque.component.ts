import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalEntradaComponent } from 'src/app/components/modalEntrada/modalEntrada.component';
import { ModalSaidaComponent } from 'src/app/components/modalSaida/modalSaida.component';
import { EstoqueService } from 'src/app/services/estoque.service';
import { MenuService } from 'src/app/services/menu.service';
import { forkJoin } from 'rxjs';

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
  modalEntradaRef: MdbModalRef<ModalEntradaComponent> | null = null;
  modalSaidaRef: MdbModalRef<ModalSaidaComponent> | null = null;

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    private estoqueService: EstoqueService,
    private modalService: MdbModalService
  ) { }

  ngOnInit() {
    this.menuService.menuSelecionado = 22;

    this.estoqueService.ListarProdutos().subscribe(
      (produtos: any[]) => {
        const observables = produtos.map(produto =>
          forkJoin({
            quantidade: this.estoqueService.getQuantidadeEstoque(produto.id),
            valorUnitario: this.estoqueService.getValorUnitarioEstoque(produto.id),
          })
        );

        forkJoin(observables).subscribe(results => {
          this.produto = produtos.map((produto, index) => ({
            id: produto.id,
            nomeProduto: produto.nomeProduto,
            descricao: produto.descricao,
            unidade: produto.unidade,
            fornecedor: produto.fornecedor,
            quantidade: results[index].quantidade, 
            valorUnitario: results[index].valorUnitario, 
          }));
          this.initializeDataTable();
        });        
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
        { title: 'Id', data: 'id' },
        { title: 'Nome', data: 'nomeProduto' },
        { title: 'Descrição', data: 'descricao' },
        { title: 'Unidade', data: 'unidade' },
        { title: 'Fornecedor', data: 'fornecedor' },
        { title: 'Quantidade', data: 'quantidade' },
        {
          title: 'Valor Unitário', data: 'valorUnitario',
          render: (data: any, type: any, full: any) => {
            return data.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
          }
        },
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
          const id = dataTableInstance.row($(event.target).closest('tr')).data().id;
          this.modalEntrada(id);
        });

        $(dataTable).on('click', '.saida-button', (event) => {
          const id = dataTableInstance.row($(event.target).closest('tr')).data().id;
          this.modalSaida(id);
        });

        $(dataTable).on('click', '.kardex-button', (event) => {
          const id = dataTableInstance.row($(event.target).closest('tr')).data().id;
          this.redirectToKardex(id);
        });
      }
    }, 0);
  }

  redirectToKardex(Id: string) {
    window.location.href = `/kardex/${Id}`;
  }

  modalEntrada(Id: string) {
    this.modalEntradaRef = this.modalService.open(ModalEntradaComponent, { data: { id: Id } });
  }

  modalSaida(Id: string) {
    this.modalSaidaRef = this.modalService.open(ModalSaidaComponent, { data: { id: Id } });
  }
}
