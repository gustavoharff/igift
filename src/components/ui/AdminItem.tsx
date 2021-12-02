import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface AdminItemProps {
  onPress: () => void;
  name: string;
}

export function AdminItem({ name, onPress }: AdminItemProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'rgba(196, 196, 196, 0.4)',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C4C4C4',
  }
})