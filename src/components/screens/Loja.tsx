import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';
import * as React from 'react';
import { View } from 'react-native';

import { ItensList } from 'features';
import { Item } from '../../@types';
import { Categoria } from '../../enum/Categoria';
import { itens } from '../../service/api/itens';

type Props = NativeStackScreenProps<
  // @ts-expect-error
  ReactNavigation.LojaParamList,
  'LojaScreen'
>;

export function LojaScreen({ route, navigation }: Props) {
  const { name, lojaId } = route.params;

  const [lojaItens, setLojaItens] = React.useState<Item[]>([]);

  React.useEffect(() => {
    itens(lojaId).then(response => setLojaItens(response.data));
  }, []);

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerLeft: props => (
        <HeaderBackButton
          {...props}
          onPress={navigation.goBack}
          tintColor="#FFBE51"
        />
      ),
    });
  }, [name, navigation]);

  return (
    <View>
      <ItensList itens={lojaItens} />
    </View>
  );
}
