import { Categoria } from '../../enum/Categoria'
import {api} from '../api'

interface CriarLoja {
  "nome": string;
	"numeroTelefone":  string;
	"categoria": Categoria
	"endereco": {
		"numero": string;
		"cep": string;
		"rua": string;
		"complemento": string;
	}
}

export async function criarLoja(data: CriarLoja) {
  return api.post('/loja/salvar', data)
}