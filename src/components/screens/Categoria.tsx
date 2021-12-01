import * as React from 'react';

import { LojaVerticalList } from 'features';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Loja } from '../../@types';
import { lojas } from '../../service/api/lojas';

type Props = NativeStackScreenProps<
  // @ts-expect-error
  ReactNavigation.LojaParamList,
  'CategoriaScreen'
>;

export function CategoriaScreen({ route }: Props) {
  const { categoria } = route.params;

  const [lojasCategoria, setLojasCategoria] = React.useState<Loja[]>([]);

  React.useEffect(() => {
    lojas().then(response => {
      setLojasCategoria(
        response.data.filter(loja => loja.categoria === categoria),
      );
    });
  }, []);

  return <LojaVerticalList title={categoria} lojas={lojasCategoria} />;
}
