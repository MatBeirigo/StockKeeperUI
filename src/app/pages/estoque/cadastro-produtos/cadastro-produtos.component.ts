import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/models/produto.model';
import { CadastroProdutosService } from 'src/app/services/cadastroprodutos.service';
import { Fornecedor } from 'src/app/models/fornecedores.model';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent implements OnInit {
  categorias: string[];
  unidades: string[];
  fornecedores: Fornecedor[];
  camposAdicionais: string[] = [];
  produtoForm: FormGroup;
  novaUnidade = '';

  constructor(
    public formBuilder: FormBuilder,
    private cadastroProdutosService: CadastroProdutosService
  ) {}

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      NomeProduto: ['', [Validators.required]],
      IdEmpresa: [''],
      Categoria: [''],
      Classificacao: [''],
      Cor: [''],
      Sabor: [''],
      Fornecedor: [''],
      Unidade: [''],
      Peso: [''],
      DimensaoEmbalagem: [''],
      Descricao: [''],
      InformacoesFiscais: [''],
      CodigoBarras: ['']
    });

    this.cadastroProdutosService.ListarCategoria().subscribe(
      (categorias: string[]) => {
        this.categorias = categorias;
      },
      error => {
        console.error('Ocorreu um erro ao carregar as categorias:', error);
      }
    );

    this.cadastroProdutosService.ListarUnidades().subscribe(
      (unidades: string[]) => {
        this.unidades = unidades;
      },
      error => {
        console.error('Ocorreu um erro ao carregar as unidades:', error);
      }
    );

    this.cadastroProdutosService.ListarFornecedores().subscribe(
      (fornecedores: Fornecedor[]) => {
        this.fornecedores = fornecedores;
      },
      error => {
        console.error('Ocorreu um erro ao carregar os fornecedores:', error);
      }
    );
  }

  get dadosForm() {
    return this.produtoForm.controls;
  }

  exibirCamposAdicionais(categoria: string): void {
    this.camposAdicionais = [];

    if (categoria === 'Roupas') {
      this.camposAdicionais.push('Cor');
    } else if (categoria === 'Alimentos') {
      this.camposAdicionais.push('Sabor');
    }
  }

  CadastrarProduto(): void {
    if (this.produtoForm.valid) {
      const produto: Produto = { ...this.produtoForm.value };

      if (!produto.Peso) {
        produto.Peso = 0;
      }
      if (!produto.DimensaoEmbalagem) {
        produto.DimensaoEmbalagem = 0;
      }
      if (!produto.CodigoBarras) {
        produto.CodigoBarras = 0;
      }
      if (!produto.IdEmpresa) {
        produto.IdEmpresa = 0;
      }

      console.log(produto);

      this.cadastroProdutosService.CadastrarProduto(produto).subscribe(
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
