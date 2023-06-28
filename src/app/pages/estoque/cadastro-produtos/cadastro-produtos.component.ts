import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/models/produto.model';
import { CadastroProdutosService } from 'src/app/services/cadastroprodutos.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent implements OnInit {
  categorias: String[];
  unidades: String[];
  camposAdicionais: string[] = [];

  produtoForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private cadastroProdutosService: CadastroProdutosService
  ) {}

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      NomeProduto: ['', [Validators.required]],
      Categoria: [''],
      Classificacao: [''],
      ValorCompra: [''],
      ValorVenda: [''],
      Quantidade: [''],
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

      if (!produto.ValorCompra) {
        produto.ValorCompra = 0;
      }
      if (!produto.ValorVenda) {
        produto.ValorVenda = 0;
      }
      if (!produto.Quantidade) {
        produto.Quantidade = 0;
      }
      if (!produto.Peso) {
        produto.Peso = 0;
      }
      if (!produto.DimensaoEmbalagem) {
        produto.DimensaoEmbalagem = 0;
      }
      if (!produto.CodigoBarras) {
        produto.CodigoBarras = 0;
      }

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
