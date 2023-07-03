import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import * as XLSX from 'xlsx';

@Component({
  selector: 'datatable-generico',
  templateUrl: './datatable-generico.component.html',
  styleUrls: ['./datatable-generico.component.scss']
})
export class DatatableGenericoComponent {
  @Input() dados: any[];
  @Input() colunas: string[];
  @Input() pageSize: number;
  @Input() pageSizeOptions: number[];
  @Input() dataSource: any[];
  @Input() filteredData: any[];

  @Output() acao = new EventEmitter<number>();

  filtro: string = '';

  dispararAcao(id: number) {
    this.acao.emit(id);
  }

  applyFilter(event: any) {
    const filterValue = event.target.value.trim().toLowerCase();
    this.filtro = filterValue;
    this.filteredData = this.dados.filter(item =>
      this.colunas.some(coluna => item[coluna].toLowerCase().includes(filterValue))
    );
    this.dataSource = this.filteredData.slice(0, this.pageSize);
  }

  onPageChanged(event: PageEvent) {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    const startIndex = pageIndex * pageSize;
    const endIndex = startIndex + pageSize;
    this.dataSource = this.filteredData.slice(startIndex, endIndex);
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
    const header = this.colunas.map(coluna => coluna.charAt(0).toUpperCase() + coluna.slice(1));

    excelData.push(header);

    for (const item of this.filteredData) {
      const row = this.colunas.map(coluna => item[coluna]);

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
}
