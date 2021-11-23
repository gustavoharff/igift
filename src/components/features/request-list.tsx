import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import type { Request as IRequest } from 'ui';
import { Request } from 'ui';

interface RequestListProps {
  requests: IRequest[];
}

export function RequestList({ requests }: RequestListProps) {
  return (
    <React.Fragment>
      <Text style={styles.title}>Histórico de pedidos</Text>
      <FlatList
        data={requests}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item: request }) => <Request request={request} />}
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
