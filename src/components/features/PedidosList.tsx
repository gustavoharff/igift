import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import { PedidoComponent } from 'ui';
import { Pedido } from '../../@types';

interface PedidosListProps {
  pedidos: Pedido[];
}

export function PedidosList({ pedidos }: PedidosListProps) {
  return (
    <React.Fragment>
      <Text style={styles.title}>Histórico de pedidos</Text>
      <FlatList
        data={pedidos}
        ListEmptyComponent={<Text>Nenhum pedido realizado</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item: pedido }) => <PedidoComponent pedido={pedido} />}
        contentContainerStyle={styles.listContainer}
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#525050',
    fontWeight: 'bold',
    marginTop: 16,
    marginHorizontal: 16,
  },
  listContainer: {
    padding: 16,
  },
  separator: {
    marginTop: 16,
  },
});
