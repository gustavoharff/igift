import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { establishmentDefault } from 'assets';

interface LojaProps {
  lojaId: number;
  name: string;
}

export function LojaComponent({ name, lojaId }: LojaProps) {
  const navigation = useNavigation();

  function onPress() {
    navigation.navigate('LojaStack', {
      screen: 'LojaScreen',
      params: {
        name,
        lojaId,
      },
    });
  }

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.container}>
        <Image source={establishmentDefault} style={styles.image} />
        <Text style={styles.text} numberOfLines={2}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 75,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
  text: {
    textAlign: 'center',
    marginTop: 8,
    color: '#525050',
  },
});
