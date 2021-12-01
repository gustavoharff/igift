import { api } from '../';

interface LoginProps {
  login: string;
  senha: string;
}

interface LoginResponse {
  idUsuario: number;
  nome: string;
  dataNascimento: string;
  endereco: {
    id: number;
    numero: string;
    cep: string;
    rua: string;
    complemento: string;
  };
  email: string;
  administrador: boolean;
}

export async function login(data: LoginProps) {
  const response = await api.post<LoginResponse>('/usuario/logar', data);
  return response;
}
