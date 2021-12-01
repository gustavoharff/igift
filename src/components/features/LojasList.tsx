import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LojaComponent } from 'ui';
import { Loja } from '../../@types';
import { Categoria } from '../../enum/Categoria';

interface LojasListProps {
  lojas: Loja[];
  categoria: Categoria;
}

export function LojasList({
  categoria,
  lojas,
}: LojasListProps) {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>{categoria}</Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.navigate('LojaStack', {
              screen: 'CategoriaScreen',
              params: {
                categoria: categoria,
              },
            });
          }}>
          <Text style={styles.more}>Ver mais</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={lojas}
        renderItem={({ item: loja }) => <LojaComponent name={loja.nome} lojaId={loja.id} />}
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
