import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { KardexService } from 'src/app/services/kardex.service';
import { MenuService } from 'src/app/services/menu.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-buttons';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit, AfterViewInit {
  produto: any[];
  dataTable: any;

  @ViewChild('dataTable', { static: false }) dataTableElement: ElementRef;

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    private elementRef: ElementRef,
    private kardexService: KardexService
  ) { }

  ngOnInit() {
    this.menuService.menuSelecionado = 21;

    this.kardexService.ListarProdutos().subscribe(
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
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }

  initializeDataTable() {
    if (this.produto && this.produto.length > 0) {
      const table = $(this.dataTableElement.nativeElement);
      this.dataTable = table.DataTable({
        data: this.produto,
        columns: [
          { title: 'Nome', data: 'nomeProduto' },
          { title: 'Categoria', data: 'categoria' },
          { title: 'Classificação', data: 'classificacao' },
          { title: 'Quantidade', data: 'quantidade' },
          { title: 'Fornecedor', data: 'fornecedor' },
          { title: 'Código Barras', data: 'codigoBarras' }
        ],
        language: {
          url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Portuguese-Brasil.json'
        },
        dom: 'Bfrtip',
        pagingType: 'full_numbers',
        paging: true,
        searching: true,
        ordering: true,
        info: true,
        lengthChange: true,
        lengthMenu: [10, 25, 50, 100],
        pageLength: 10,
        processing: true,
        scrollCollapse: true,
      });
    }
  }
}
