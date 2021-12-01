import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ItemComponent } from 'features';
import * as React from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import { Icon } from 'ui';
import { Entregador } from '../../@types';
import { AuthContext } from '../../context/AuthContext';
import { listarEntregadores } from '../../service/api/entregadores';
import { realizarPedido } from '../../service/api/pedido';
import { EntregadoresModal } from '../features/EntregadoresModal';

type Props = NativeStackScreenProps<
  // @ts-expect-error
  ReactNavigation.LojaParamList,
  'PedidoScreen'
>;

export function PedidoScreen({ route }: Props) {
  const { item } = route.params;
  const { user } = React.useContext(AuthContext);

  const [numero, setNumero] = React.useState('');
  const [cep, setCep] = React.useState('');
  const [rua, setRua] = React.useState('');
  const [complemento, setComplemento] = React.useState('');

  const [destinatario, setDestinatario] = React.useState('');
  const [mensagem, setMensagem] = React.useState('');

  const navigation = useNavigation();

  const total = React.useMemo(() => {
    return item.valorUnitario + 4;
  }, [item.valorUnitario]);

  const [entregadoreModalVisible, setEntregadoreModalVisible] =
    React.useState(false);

  const [entregadores, setEntregadores] = React.useState<Entregador[]>([]);

  const [selectedEntregador, setSelectedEntregador] =
    React.useState<Entregador | null>(null);

  // const paymentType = 'money';

  React.useEffect(() => {
    listarEntregadores().then(response => setEntregadores(response.data));
  }, [])

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: item.nome,
    });
  }, [navigation, item.nome]);

  async function onSubmit() {
    if (!user) return;

    if (!numero || !cep || !rua || !complemento || !selectedEntregador) {
      Alert.alert('Atenção', 'Todos os campos são obrigatórios.');
      return;
    }

    await realizarPedido({
      idUsuario: user?.idUsuario,
      endereco: { cep, complemento, numero, rua },
      finalizado: false,
      cartao: {
        destinatario,
        mensagem,
        remetente: user.nome,
      },
      listaItens: [item],
      valorFrete: 4,
      valorItens: item.valorUnitario,
      valorTotal: total,
      saiuParaEntrega: false,
      entregadorId: selectedEntregador?.id,
      idLoja: item.loja.id,
    });

    // TODO: POST TO API
    navigation.navigate('Pedidos');
  }

  const { height } = useWindowDimensions();

  const maxHeight = React.useMemo(() => {
    return (height * 80) / 100;
  }, [height]);

  return (
    <View style={{ flex: 1 }}>
      <EntregadoresModal
        entregadores={entregadores}
        isVisible={entregadoreModalVisible}
        onEntregadorPress={(entregador) => setSelectedEntregador(entregador)}
        onRequestClose={() => setEntregadoreModalVisible(false)}
      />
      <Text style={styles.title}>Realizar pedido</Text>

      <View style={styles.form}>
        <ScrollView style={{ maxHeight }}>
          <ItemComponent
            nome={item.nome}
            categoria={item.categoria}
            loja={item.loja}
            valorUnitario={item.valorUnitario}
            button={false}
          />

          <View style={styles.separator} />

          <Text style={styles.section}>Endereço</Text>

          <View style={styles.separator} />

          <TextInput
            placeholder="CEP"
            value={cep}
            onChangeText={setCep}
            style={styles.input}
          />

          <View style={styles.separator} />
          <TextInput
            placeholder="Rua"
            value={rua}
            onChangeText={setRua}
            style={styles.input}
          />

          <View style={styles.separator} />
          <TextInput
            placeholder="Número"
            value={numero}
            onChangeText={setNumero}
            style={styles.input}
          />

          <View style={styles.separator} />
          <TextInput
            placeholder="Complemento"
            value={complemento}
            onChangeText={setComplemento}
            style={styles.input}
          />

          <View style={styles.separator} />

          <Text style={styles.section}>
            Cartão - Será enviado junto ao pedido
          </Text>

          <View style={styles.separator} />
          <TextInput
            placeholder="Destinatario"
            value={destinatario}
            onChangeText={setDestinatario}
            style={styles.input}
          />
          <View style={styles.separator} />
          <TextInput
            placeholder="Mensagem"
            value={mensagem}
            onChangeText={setMensagem}
            style={styles.input}
          />

          <View style={styles.separator} />

          <Text style={styles.section}>Pagamento</Text>

          <View style={styles.separator} />

          <TextInput
            placeholder="Pagamento"
            value="Dinheiro"
            editable={false}
            style={[styles.input, { opacity: 0.7 }]}
          />

          <View style={styles.separator} />
          <TouchableOpacity onPress={() => setEntregadoreModalVisible(true)}>
            <Text
              style={[
                styles.input,
                { color: selectedEntregador?.nome ? '#525050' : '#B2B2AF' },
              ]}>
              {selectedEntregador?.nome ?? 'Entregador'}
            </Text>
          </TouchableOpacity>

          <View style={styles.separator} />

          <TextInput
            placeholder="Receber em casa"
            value="R$ 4,00 - Receber em casa"
            editable={false}
            style={[styles.input, { opacity: 0.7 }]}
          />

          <View style={styles.separator} />

          <TextInput
            placeholder="Valor total"
            value={`R$ ${String(total)},00 - Valor total`}
            editable={false}
            style={[styles.input, { opacity: 0.7 }]}
          />

          <View style={styles.separator} />

          <Button
            title={'Confirmar pedido'}
            color="#2AA31A"
            onPress={onSubmit}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 24,
    color: '#525050',
    fontWeight: 'bold',
    marginTop: 16,
    marginHorizontal: 16,
  },
  form: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  section: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#525050',
  },
  separator: {
    marginTop: 16,
  },
  input: {
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
});
