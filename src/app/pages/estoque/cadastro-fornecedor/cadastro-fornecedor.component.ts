import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fornecedor } from 'src/app/models/fornecedores.model';
import { CadastroFornecedorService } from 'src/app/services/cadastrofornecedor.service';

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.component.html',
  styleUrls: ['./cadastro-fornecedor.component.scss']
})
export class CadastroFornecedorComponent implements OnInit{
  fornecedores: Fornecedor[];
  fornecedorForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private cadastroFornecedorService: CadastroFornecedorService
  ) {}

  ngOnInit(): void {
    this.fornecedorForm = this.formBuilder.group({
      NomeFantasia: ['', [Validators.required]],
      RazaoSocial: [''],
      Cnpj: [''],
      Cpf: [''],
      Endereco: [''],
      Cep: [''],
      Cidade: [''],
      Estado: [''],
      Telefone: [''],
      Email: [''],
      Site: [''],
      TipoFornecedor: [''],
    });
  }

  get dadosForm() {
    return this.fornecedorForm.controls;
  }

  cadastrarFornecedor(): void {
    if (this.fornecedorForm.valid) {
      const fornecedor: Fornecedor = { ...this.fornecedorForm.value };
    
      this.cadastroFornecedorService.CadastrarFornecedor(fornecedor).subscribe(
        () => {
          alert('Produto cadastrado com sucesso');
        },
        error => {
          alert('Ocorreu um erro ao tentar cadastrar o produto ' + error.message);
        }
      );
    }
  }
}
