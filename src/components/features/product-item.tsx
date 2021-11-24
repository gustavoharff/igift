import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function ProductItem({ name, price, description }: Product) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.price}>R${price}</Text>
    </View>
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
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    color: '#FFBE51',
  },
});
