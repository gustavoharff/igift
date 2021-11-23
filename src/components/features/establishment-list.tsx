import * as React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Establishment } from 'ui';

interface EstablishmentListProps {
  title: string;
  establishments: string[];
}

export function EstablishmentList({
  title,
  establishments,
}: EstablishmentListProps) {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={styles.more}>Ver mais</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={establishments}
        renderItem={({ item: establishment }) => (
          <Establishment name={establishment} />
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
    marginLeft: 16,
  },
  more: {
    fontWeight: 'bold',
    color: '#FFBE51',
  },
});
