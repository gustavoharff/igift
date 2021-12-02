import { Categoria } from '../../enum/Categoria';
import { api } from '../api';

interface CriarItem {
  idLoja: number;
  nome: string;
  valorUnitario: number;
  categoria: Categoria;
}

export async function criarItem(data: CriarItem) {
  return api.post('/loja/item/adicionar', data);
}
