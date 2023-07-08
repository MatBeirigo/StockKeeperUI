import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EstoqueService } from 'src/app/services/estoque.service';
import { MenuService } from 'src/app/services/menu.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-ficha-estoque',
  templateUrl: './ficha-estoque.component.html',
  styleUrls: ['./ficha-estoque.component.scss']
})
export class FichaEstoqueComponent implements OnInit {
  produto: any[] = []; 
  filteredProduto: any[];
  colunasTabela: string[] = ['Nome', 'Categoria', 'Classificação', 'Fornecedor'];
  pageSize: number = 10;
  pageSizeOptions: number[] = [5, 10, 25, 50];
  p: number = 1;

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    private estoqueService: EstoqueService
  ) { }

  ngOnInit() {
    this.menuService.menuSelecionado = 22;

    this.estoqueService.ListarProdutos().subscribe(
      (produto: any[]) => {
        this.filteredProduto = produto;
      },
      error => {
        console.error('Ocorreu um erro ao carregar os produtos:', error);
      }
    );
  }

  printDataTable() {
    const printContents = document.getElementById('table-container').outerHTML;
    const popupWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWindow.document.open();
    popupWindow.document.write(`
      <html>
        <head>
          <title>Ficha de Estoque - Impressão</title>
          <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.25/css/jquery.dataTables.min.css">
          <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/buttons/1.7.1/css/buttons.dataTables.min.css">
        </head>
        <body onload="window.print(); window.close();">${printContents}</body>
      </html>
    `);
    popupWindow.document.close();
  }


  exportToExcel() {
    const excelData: any[] = [];
    const header = ['Nome', 'Categoria', 'Classificação', 'Fornecedor'];

    excelData.push(header);

    for (const item of this.filteredProduto) {
      const row = [
        item.nomeProduto,
        item.categoria,
        item.classificacao,
        item.fornecedor
      ];

      excelData.push(row);
    }

    const worksheet: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(excelData);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };

    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveExcelFile(excelBuffer, 'ficha_estoque.xlsx');
  }

  saveExcelFile(buffer: any, fileName: string) {
    const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  
    const link: HTMLAnchorElement = document.createElement('a');
    const url: string = window.URL.createObjectURL(data);
  
    link.href = url;
    link.download = fileName;
    link.click();
  
    window.URL.revokeObjectURL(url);
    link.remove();
  }

  filterData(event: any) {
    const searchTerm = event.target.value.toLowerCase();

    this.filteredProduto = this.produto.filter(item =>
      item.nomeProduto.toLowerCase().includes(searchTerm) ||
      item.categoria.toLowerCase().includes(searchTerm) ||
      item.classificacao.toLowerCase().includes(searchTerm) ||
      item.fornecedor.toLowerCase().includes(searchTerm)
    );
  }

  Kardex(id: number) {
  }

  EntradaEstoque(id: number) {}

  SaidaEstoque(id: number) {}
}
