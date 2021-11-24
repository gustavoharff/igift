import { EstablishmentVertical } from 'features';
import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface EstablishmentListProps {
  title: string;
  establishments: string[];
}

export function EstablishmentVerticalList({
  title,
  establishments,
}: EstablishmentListProps) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={establishments}
        renderItem={({ item: establishment }) => (
          <EstablishmentVertical name={establishment} />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-between',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  listContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    color: '#525050',
    fontWeight: 'bold',
  },
  separator: {
    marginBottom: 16,
  },
  more: {
    fontWeight: 'bold',
    color: '#FFBE51',
  },
});
