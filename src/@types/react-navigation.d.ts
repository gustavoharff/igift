import type { NavigatorScreenParams } from '@react-navigation/native'; // eslint-disable-line
import type { Item } from '.';  // eslint-disable-line
import { Categoria } from '../enum/Categoria'; // eslint-disable-line

declare global {
  namespace ReactNavigation {
    interface LojaParamList {
      LojaScreen: {
        lojaId: number;
        name: string;
      };
      PedidoScreen: {
        item: Item;
      };
      CategoriaScreen: {
        categoria: Categoria;
      };
      CreateLojaScreen: undefined;
      CreateItemScreen: undefined;
      CreateEntregadorScreen: undefined;
    }
    
    interface RootParamList {
      Inicio: undefined;
      Pedidos: undefined;
      LojaStack: NavigatorScreenParams<LojaParamList>;
      SignUpScreen: undefined;
      LoginScreen: undefined;
    }
  }
}
