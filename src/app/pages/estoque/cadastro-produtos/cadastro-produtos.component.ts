import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produto } from 'src/app/models/produto.model';
import { CadastroProdutosService } from 'src/app/services/cadastroprodutos.service';
import { MenuService } from 'src/app/services/menu.service';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.scss']
})
export class CadastroProdutosComponent implements OnInit {
  categorias: string[];
  camposAdicionais: string[] = [];

  produtoForm: FormGroup;

  constructor(
    public menuService: MenuService,
    public formBuilder: FormBuilder,
    private cadastroProdutosService: CadastroProdutosService
  ) {}

  ngOnInit(): void {
    this.menuService.menuSelecionado = 21;

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
        console.log('Categorias:', categorias);
        this.categorias = categorias.sort();
      },
      error => {
        console.error('Ocorreu um erro ao carregar as categorias:', error);
      }
    );
  }

  get dadosForm() {
    return this.produtoForm.controls;
  }

  exibirCamposAdicionais(categoria: string): void {
    this.camposAdicionais = [];

    if (categoria === 'roupa') {
      this.camposAdicionais.push('Cor');
    } else if (categoria === 'outro') {
      // Adicione outras condições para outras categorias, se necessário
      // Exemplo: this.camposAdicionais.push('CampoAdicional');
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
