import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { Item } from '../../@types';

type Props = Item & {
  button?: boolean;
};

export function ItemComponent({
  nome,
  categoria,
  valorUnitario,
  loja,
  button = true,
}: Props) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      disabled={!button}
      activeOpacity={0.7}
      onPress={() => {
        navigation.navigate('LojaStack', {
          screen: 'PedidoScreen',
          params: {
            item: {
              nome,
              categoria,
              valorUnitario,
              loja,
            },
          },
        });
      }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.name}>{nome}</Text>
          <Text style={styles.description}>{categoria}</Text>
        </View>
        <Text style={styles.price}>R${valorUnitario}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(196, 196, 196, 0.4)',
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    color: '#525050',
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  description: {
    color: '#5F5E5E',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#FFBE51',
  },
});
