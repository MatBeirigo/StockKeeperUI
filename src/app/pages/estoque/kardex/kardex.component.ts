import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ModalEntradaComponent } from 'src/app/components/modalEntrada/modalEntrada.component';
import { KardexService } from 'src/app/services/kardex.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
  styleUrls: ['./kardex.component.scss']
})
export class KardexComponent implements OnInit {
  produto: any[];
  estoque: any;
  modalRef: MdbModalRef<ModalEntradaComponent> | null = null;

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private kardexService: KardexService,
    private modalService: MdbModalService
  ) { }

  ngOnInit() {
    this.menuService.menuSelecionado = 21;

    this.route.paramMap.subscribe(params => {
      const codigo = params.get('codigo');
      this.kardexService.ProcurarProdutoNoEstoque(codigo).subscribe(
        (estoque: any) => {
          this.estoque = estoque;
        },
        error => {
          console.error('Ocorreu um erro ao buscar o produto no estoque: ', error);
        }
      );
    });
  }
  
  openModal() {
    this.modalRef = this.modalService.open(ModalEntradaComponent)
  }
}
