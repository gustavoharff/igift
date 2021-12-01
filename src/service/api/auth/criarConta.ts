import { api } from '../../';
import { Endereco } from '../../../@types';

interface CriarContaProps {
  nome: string;
  email: string;
  senha: string;
  administrador: boolean;
  dataNascimento: string;
  endereco: Endereco;
}

export async function criarConta(data: CriarContaProps) {
  console.log(data)
  return api.post('/usuario/salvar', data);
}
