import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Estoque } from 'src/app/models/estoque.model';
import { EstoqueService } from 'src/app/services/estoque.service';

@Component({
selector: 'modalEntrada',
  templateUrl: './modalEntrada.component.html',
  styleUrls: ['./modalEntrada.component.scss']
})
export class ModalEntradaComponent implements OnInit {
  @Input() id: number;
  nomeProduto: string;
  estoqueForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public modalRef: MdbModalRef<ModalEntradaComponent>,
    private estoqueService: EstoqueService
  ) {}

  ngOnInit(): void {
    this.estoqueForm = this.formBuilder.group({
      id: [''],
      idEmpresa: [0],
      idAlteracao: [''],
      produto: [''],
      quantidadeEstoque: [''],
      valorEstoque: [0],
      valorUnitarioEstoque: ['']
    });

    this.estoqueService.ObterEstoque(this.id).subscribe(
      (estoque: any) => {
        this.nomeProduto = estoque.produto;

        this.estoqueForm.patchValue({
          id: estoque.id,
          produto: estoque.produto,
          idAlteracao: estoque.idAlteracao,
        });
      },
      (error: any) => {
        console.error('Erro ao obter o estoque do produto:', error);
      }
    );
  }

  get dadosForm() {
    return this.estoqueForm.controls;
  }

  EntradaEstoque() {
    const estoque: Estoque = { ...this.estoqueForm.value };

    this.estoqueService.EntradaEstoque(estoque).subscribe(
      () => {
        alert('Entrada dada com sucesso');
      },
      error => {
        alert('Ocorreu um erro ao tentar dar entrada nesse produto ' + error.message);
      }
    );
  }
}
