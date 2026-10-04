import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProdutosService } from './services/produtos';
import { Produto } from './models/produto.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {

  produtos: Produto[] = [];

  idBusca: number | null = null;
  produtoBuscado: Produto | null = null;

  novoNome = '';
  novoPreco: number | null = null;

  produtoEditandoId: number | null = null;
  nomeEdicao = '';
  precoEdicao: number | null = null;

  mensagem = '';

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.listarTodos().subscribe({
      next: (dados) => {
        this.produtos = dados;
      },
      error: () => {
        this.mensagem = 'Erro ao carregar os produtos.';
      }
    });
  }

  buscarPorId(): void {
    if (this.idBusca === null) {
      return;
    }

    this.produtosService.buscarPorId(this.idBusca).subscribe({
      next: (produto) => {
        this.produtoBuscado = produto;
        this.mensagem = '';
      },
      error: () => {
        this.produtoBuscado = null;
        this.mensagem = 'Produto não encontrado.';
      }
    });
  }

  adicionarProduto(): void {
    if (!this.novoNome || this.novoPreco === null) {
      this.mensagem = 'Preencha nome e preço.';
      return;
    }

    this.produtosService.criar({
      nome: this.novoNome,
      preco: this.novoPreco
    }).subscribe({
      next: () => {
        this.novoNome = '';
        this.novoPreco = null;
        this.mensagem = 'Produto adicionado com sucesso.';
        this.carregarProdutos();
      },
      error: () => {
        this.mensagem = 'Erro ao adicionar produto.';
      }
    });
  }

  iniciarEdicao(produto: Produto): void {
    this.produtoEditandoId = produto.id;
    this.nomeEdicao = produto.nome;
    this.precoEdicao = produto.preco;
  }

  cancelarEdicao(): void {
    this.produtoEditandoId = null;
    this.nomeEdicao = '';
    this.precoEdicao = null;
  }

  salvarEdicao(id: number): void {
    if (!this.nomeEdicao || this.precoEdicao === null) {
      this.mensagem = 'Preencha nome e preço.';
      return;
    }

    this.produtosService.atualizar(id, {
      nome: this.nomeEdicao,
      preco: this.precoEdicao
    }).subscribe({
      next: () => {
        this.mensagem = 'Produto atualizado com sucesso.';
        this.cancelarEdicao();
        this.carregarProdutos();
      },
      error: () => {
        this.mensagem = 'Erro ao atualizar produto.';
      }
    });
  }

  removerProduto(id: number): void {
    this.produtosService.remover(id).subscribe({
      next: () => {
        this.mensagem = 'Produto removido com sucesso.';
        this.carregarProdutos();
      },
      error: () => {
        this.mensagem = 'Erro ao remover produto.';
      }
    });
  }
}