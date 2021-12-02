import { api } from '../'
import { Cartao, Endereco, Item } from '../../@types';

interface RealizarPedidoProps {
  idUsuario: number;
  idLoja: number;
  endereco: Endereco;
  listaItensId: number[];
  valorTotal: number;
  valorItens: number;
  valorFrete: number;
  entregadorId: number;
  saiuParaEntrega: boolean;
  finalizado:  boolean;
  cartao: Cartao;
}

export async function realizarPedido(data: RealizarPedidoProps) {
  console.log("Data", data);
  await api.post('/pedido/salvar', data)
}