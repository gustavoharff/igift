import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProductItem } from 'features';
import * as React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type Props = NativeStackScreenProps<
  // @ts-expect-error
  ReactNavigation.EstablishmentParamList,
  'RequestFormScreen'
>;

export function RequestFormScreen({ route, navigation }: Props) {
  const { product } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: product.name,
    });
  }, [navigation, product.name]);

  if (!product) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>Realizar pedido</Text>

      <View style={styles.form}>
        <ScrollView>
          <ProductItem
            name={product.name}
            description={product.description}
            price={product.price}
            button={false}
          />

          <View style={styles.separator} />

          <TextInput placeholder="Seu nome" style={styles.input} />

          <View style={styles.separator} />

          <TextInput placeholder="Seu e-mail" style={styles.input} />

          <View style={styles.separator} />

          <TextInput
            placeholder="Pagamento"
            value="Dinheiro"
            editable={false}
            style={[styles.input, { opacity: 0.7 }]}
          />

          <View style={styles.separator} />

          <Button title={'Confirmar pagamento'} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    color: '#525050',
    fontWeight: 'bold',
    marginTop: 16,
    marginHorizontal: 16,
  },
  form: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  separator: {
    marginTop: 16,
  },
  input: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
});
