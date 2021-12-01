import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { establishmentDefault } from 'assets';
import { Loja } from '../../@types';

interface LojaVerticalProps {
  loja: Loja;
}

export function LojaVerticalItem({ loja }: LojaVerticalProps) {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate('LojaStack', {
      screen: 'LojaScreen',
      params: {
        name: loja.nome,
        lojaId: loja.id,
      },
    });
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Image source={establishmentDefault} style={styles.image} />
        <Text style={styles.text} numberOfLines={2}>
          {loja.nome}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(196, 196, 196, 0.4)',
    padding: 16,
    borderRadius: 8,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
  text: {
    marginLeft: 16,
    textAlign: 'center',
    marginTop: 8,
    color: '#525050',
  },
});
