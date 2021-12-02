import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AdminItem } from 'ui';

export function AdminScreen() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Administração</Text>

      <AdminItem name="Lojas" onPress={() => {
        navigation.navigate('LojaStack', {
          screen: 'CreateLojaScreen'
        })
      }} />
      <View  style={styles.separator}/>
      <AdminItem name="Itens" 
        onPress={() => {
          navigation.navigate('LojaStack', {
            screen: 'CreateItemScreen'
          })
        }}
      />
      <View  style={styles.separator}/>
      <AdminItem name="Entregadores" 
         onPress={() => {
          navigation.navigate('LojaStack', {
            screen: 'CreateEntregadorScreen'
          })
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {paddingHorizontal: 16},
  title: {
    fontSize: 24,
    color: '#525050',
    fontWeight: 'bold',
    marginVertical: 16,
    marginHorizontal: 16,
  },
  separator: {
    marginBottom: 16
  }
});
