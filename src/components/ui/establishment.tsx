import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { establishmentDefault } from 'assets';

interface EstablishmentProps {
  name: string;
}

export function Establishment({ name }: EstablishmentProps) {
  return (
    <View style={styles.container}>
      <Image source={establishmentDefault} style={styles.image} />
      <Text style={styles.text} numberOfLines={2}>
        {name}
      </Text>
    </View>
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
