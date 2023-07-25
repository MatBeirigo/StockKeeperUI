import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Estoque } from 'src/app/models/estoque.model';
import { EstoqueService } from 'src/app/services/estoque.service';

@Component({
  selector: 'modalSaida',
  templateUrl: './modalSaida.component.html',
  styleUrls: ['./modalSaida.component.scss']
})
export class ModalSaidaComponent implements OnInit {
  @Input() id: number;
  nomeProduto: string;
  valorUnitarioEstoque: number;
  estoqueForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    public modalRef: MdbModalRef<ModalSaidaComponent>,
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
      valorUnitarioEstoque: [0]
    });

    this.estoqueService.ObterEstoque(this.id).subscribe(
      (estoque: any) => {
        this.nomeProduto = estoque.produto;
        this.valorUnitarioEstoque = estoque.valorUnitarioEstoque;

        this.estoqueForm.patchValue({
          id: estoque.id,
          produto: estoque.produto,
          idAlteracao: estoque.idAlteracao,
          valorUnitarioEstoque: estoque.valorUnitarioEstoque
        });
      },
      (error: any) => {
        console.error('Erro ao obter o estoque do produto:', error);
      }
    );
  }

  SaidaEstoque() {
    const estoque: Estoque = { ...this.estoqueForm.value };

    this.estoqueService.SaidaEstoque(estoque).subscribe(
      () => {
        alert('Saida dada com sucesso');
      },
      error => {
        alert('Ocorreu um erro ao tentar dar saida nesse produto ' + error.message);
      }
    );
  }
}