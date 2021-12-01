import * as React from 'react';
import { ScrollView, View } from 'react-native';

import { LojasList } from 'features';
import { Loja } from '../../@types';
import { Categoria } from '../../enum/Categoria';
import { lojas } from '../../service/api/lojas';

export function InicioScreen() {
  const [roupas, setRoupas] = React.useState<Loja[]>([]);
  const [farmacias, setFarmacias] = React.useState<Loja[]>([]);

  React.useEffect(() => {
    lojas().then(response => {
      setRoupas(
        response.data.filter(loja => loja.categoria === Categoria.ROUPA),
      );
      setFarmacias(
        response.data.filter(loja => loja.categoria === Categoria.FARMACIA),
      );
    });
  }, []);

  return (
    <View>
      <ScrollView>
        {farmacias.length > 0 && (
          <LojasList categoria={Categoria.FARMACIA} lojas={farmacias} />
        )}

        {roupas.length > 0 && (
          <LojasList categoria={Categoria.ROUPA} lojas={roupas} />
        )}

      </ScrollView>
    </View>
  );
}
