import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Input } from 'ui';
import { Categoria } from '../../enum/Categoria';
import { criarLoja } from '../../service/api/criarloja';

export function CreateLojaScreen() {
  const [nome, setNome] = React.useState('');
  const [numeroTelefone, setNumeroTelefone] = React.useState('');
  const [categoria, setCategoria] = React.useState(Categoria.FARMACIA);
  const [numero, setNumero] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [rua, setRua] = React.useState('');
  const [complemento, setComplemento] = React.useState('');

  const navigation = useNavigation()

  async function handleCreateLoja() {
    if (!nome || !numeroTelefone || !numero || !cep || !rua || !complemento) {
      Alert.alert('Atenção', 'Todos os campos são obrigatórios');
      return;
    }

    try {
      await criarLoja({
        categoria,
        endereco: { cep, complemento, numero, rua },
        nome,
        numeroTelefone,
      });
    } catch {
      Alert.alert('Atenção', 'Não foi possível cadastrar a loja, tente novamente.');
      return;
    }

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar loja</Text>

      <View style={styles.separator} />

      <Input placeholder="Nome" value={nome} onChangeText={setNome} />
      <View style={styles.separator} />

      <Input
        placeholder="Número de telefone"
        value={numeroTelefone}
        onChangeText={setNumeroTelefone}
      />
      <View style={styles.separator} />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <TouchableOpacity onPress={() => setCategoria(Categoria.FARMACIA)}>
          <Text
            style={[
              styles.categoria,
              {
                color: categoria === Categoria.FARMACIA ? '#2AA31A' : undefined,
              },
            ]}>
            Farmácia
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setCategoria(Categoria.ROUPA)}>
          <Text
            style={[
              styles.categoria,
              { color: categoria === Categoria.ROUPA ? '#2AA31A' : undefined },
            ]}>
            Roupas
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />
      {/* <Input placeholder="Nome" value={nome} onChangeText={setNome} />
      <View style={styles.separator} /> */}

      <Input placeholder="CEP" value={cep} onChangeText={setCep} />
      <View style={styles.separator} />

      <Input placeholder="Rua" value={rua} onChangeText={setRua} />
      <View style={styles.separator} />
      <Input placeholder="Número" value={numero} onChangeText={setNumero} />
      <View style={styles.separator} />

      <Input
        placeholder="Complemento"
        value={complemento}
        onChangeText={setComplemento}
      />
      <View style={styles.separator} />
      <Button title={'Cadastrar Loja'} color="#2AA31A" onPress={handleCreateLoja} />
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
});
