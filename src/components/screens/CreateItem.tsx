import { useNavigation } from '@react-navigation/native';
import { LojasModal } from 'features';
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
import { Loja } from '../../@types';

import { criarItem } from '../../service/api/criaritem';

import { lojas } from '../../service/api/lojas';

export function CreateItemScreen() {
  const [nome, setNome] = React.useState('');
  const [valorUnitario, setValorUnitario] = React.useState('');

  const [lojasList, setLojasList] = React.useState<Loja[]>([]);

  const [selectedLoja, setSelectedLoja] = React.useState<Loja | null>(null);

  const [lojaModalOpen, setLojaModalOpen] = React.useState(false);

  const navigation = useNavigation();

  async function handleCreateLoja() {
    if (!nome || !valorUnitario || !selectedLoja) {
      Alert.alert('Atenção', 'Todos os campos são obrigatórios');
      return;
    }

    try {
      await criarItem({
        categoria: selectedLoja.categoria,
        nome,
        valorUnitario: Number(valorUnitario),
        idLoja: selectedLoja.id,
      });
    } catch {
      Alert.alert(
        'Atenção',
        'Não foi possível cadastrar o item, tente novamente.',
      );
      return;
    }

    navigation.goBack();
  }

  React.useEffect(() => {
    lojas().then(response => setLojasList(response.data));
  }, []);

  return (
    <View style={styles.container}>
      <LojasModal
        lojas={lojasList}
        isVisible={lojaModalOpen}
        onLojaPress={loja => setSelectedLoja(loja)}
        onRequestClose={() => setLojaModalOpen(false)}
      />

      <Text style={styles.title}>Cadastrar item da loja</Text>

      <View style={styles.separator} />

      <Input placeholder="Nome" value={nome} onChangeText={setNome} />
      <View style={styles.separator} />

      <Input
        placeholder="Valor"
        keyboardType="numeric"
        value={valorUnitario}
        onChangeText={setValorUnitario}
      />

      <View style={styles.separator} />
      <TouchableOpacity onPress={() => setLojaModalOpen(true)}>
        <Text
          style={[
            styles.input,
            { color: selectedLoja?.nome ? '#525050' : '#B2B2AF' },
          ]}>
          {selectedLoja?.nome ?? 'Loja'}
        </Text>
      </TouchableOpacity>

      <View style={styles.separator} />

      <View style={styles.separator} />

      <Button
        title={'Cadastrar Item'}
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
