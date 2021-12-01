import { api } from '../';

export async function itens(lojaId: number) {
  const response = await api.get(`/loja/retornarItensLoja/${lojaId}`);

  return response;
}
