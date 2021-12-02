import { Categoria } from '../../enum/Categoria';
import { api } from '../api';

interface CriarEntregadorProps {
nome: string;
email: string;
}

export async function criarEntregador(data: CriarEntregadorProps) {
  return api.post('/entregador/salvar', {
    ...data,
    dataNascimento: '2021-12-01',
    senha: "123",
    endereco: {
      numero: "123",
      cep: "9380000",
      rua: "Rua",
      complemento: "casa"
    }
  });
}
