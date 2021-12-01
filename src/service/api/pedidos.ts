import { api } from '../api'

export async function listarPedidos(userId: number) {
  return api.get(`/pedido/usuario/${userId}`);
}