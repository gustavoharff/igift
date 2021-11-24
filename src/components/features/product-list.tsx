import { ProductItem } from 'features';
import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <React.Fragment>
      <Text style={styles.title}>Produtos</Text>
      <FlatList
        data={products}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <ProductItem
            name={item.name}
            price={item.price}
            description={item.description}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  separator: {
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    color: '#525050',
    fontWeight: 'bold',
    marginTop: 16,
    marginHorizontal: 16,
  },
});
