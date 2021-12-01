import { api } from '../'

export async function listarEntregadores() {
  return api.get('/entregador/listar');
}