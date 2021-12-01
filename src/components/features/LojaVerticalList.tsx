import { LojaVerticalItem } from 'features';
import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Loja } from '../../@types';

interface EstablishmentListProps {
  title: string;
  lojas: Loja[];
}

export function LojaVerticalList({
  title,
  lojas,
}: EstablishmentListProps) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={lojas}
        renderItem={({ item: loja }) => (
          <LojaVerticalItem loja={loja} />
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
