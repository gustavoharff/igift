import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { Input } from 'ui';
import { criarEntregador } from '../../service/api/criarEntregador';

export function CreateEntregadorScreen() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  const navigation = useNavigation();

  async function handleCreateLoja() {
    if (!nome || !email) {
      Alert.alert('Atenção', 'Todos os campos são obrigatórios');
      return;
    }

    try {
      await criarEntregador({
        nome,
        email,
      });
    } catch {
      Alert.alert(
        'Atenção',
        'Não foi possível cadastrar o entregador, tente novamente.',
      );
      return;
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar entregador</Text>

      <View style={styles.separator} />

      <Input placeholder="Nome" value={nome} onChangeText={setNome} />
      <View style={styles.separator} />

      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        textContentType="emailAddress"
        autoCorrect={false}
      />

      <View style={styles.separator} />

      <View style={styles.separator} />

      <Button
        title={'Cadastrar Entregador'}
        color="#2AA31A"
        onPress={handleCreateLoja}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16 },
  title: {
    fontSize: 24,
    color: '#525050',
    fontWeight: 'bold',
    marginVertical: 16,
  },
  separator: {
    marginBottom: 16,
  },
  categoria: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
  input: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
});
