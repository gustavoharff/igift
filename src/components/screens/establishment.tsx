import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';
import * as React from 'react';
import { View } from 'react-native';

import { ProductList } from 'features';

type Props = NativeStackScreenProps<
  // @ts-expect-error
  ReactNavigation.EstablishmentParamList,
  'Establishment'
>;

export function EstablishmentScreen({ route, navigation }: Props) {
  const { name } = route.params;

  const [products, setProducts] = React.useState<Product[]>([]);

  React.useEffect(() => {
    setProducts([
      {
        name: 'Titulo do produto',
        description: 'Descrição breve do produto',
        price: 12,
      },
      {
        name: 'Outro producto',
        description: 'Descrição de um outro produto.',
        price: 10,
      },
    ]);
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
      <ProductList products={products} />
    </View>
  );
}
