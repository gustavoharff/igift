import { Categoria } from '../enum/Categoria';

declare type Usuario = {
  idUsuario: number;
  nome: string;
  dataNascimento: string;
  endereco: Endereco;
  email: string;
  administrador: boolean;
};

declare type Entregador = {
  id: number;
  nome: string;
  dataNascimento: string;
  endereco: Endereco;
  email: string;
};

declare type Cartao = {
  destinatario: string;
  remetente: string;
  mensagem: string;
};

declare type Endereco = {
  numero: string;
  cep: string;
  rua: string;
  complemento: string;
};

declare type Item = {
  nome: string;
  valorUnitario: number;
  categoria: Categoria;
  loja: Loja;
};


declare type Loja = {
  id: number;
  nome: string;
  numeroTelefone: string;
  categoria: Categoria;
  endereco: Endereco;
};

declare type Pedido = {
  usuario: Usuario;
  loja: Loja;
  itens: Item[];
  valorTotal: number;
  valorItens: number;
  finalizado: boolean;
  entregador: Entregador;
  valorFrete: number;
  saiuParaEntrega: boolean;
};
