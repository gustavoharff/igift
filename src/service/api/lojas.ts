import { Loja } from '../../@types';
import { api } from './';

export async function lojas() {
  const response = await api.get<Loja[]>('/loja/listarLojas');
  return response;
}
