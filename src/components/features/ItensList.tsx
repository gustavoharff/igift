import { ItemComponent } from 'features';
import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import type { Item } from '../../@types';

interface ItensListProps {
  itens: Item[];
}

export function ItensList({ itens }: ItensListProps) {
  return (
    <React.Fragment>
      <Text style={styles.title}>Produtos</Text>
      <FlatList
        data={itens}
        ListEmptyComponent={<Text>Nenhum item disponivel</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <ItemComponent
            nome={item.nome}
          loja={item.loja}
            categoria={item.categoria}
            valorUnitario={item.valorUnitario}
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
