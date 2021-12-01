import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { Input } from 'ui';
import { AuthContext } from '../../context/AuthContext';
import { criarConta } from '../../service/api/auth/criarConta';

export function SignUpScreen() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [dataNascimento, setDataNascimento] = React.useState('2021-12-01');
  const [numero, setNumero] = React.useState('123');
  const [cep, setCep] = React.useState('Cep');
  const [rua, setRua] = React.useState('Rua');
  const [complemento, setComplemento] = React.useState('Complemento');

  const [admin, setAdmin] = React.useState(false);

  const navigation = useNavigation();

  const { createAccount } = React.useContext(AuthContext);

  async function handleCreate() {
    if (!nome || !email || !password) {
      return;
    }

    await createAccount({
      administrador: admin,
      dataNascimento,
      nome,
      email,
      senha: password,
      endereco: {
        cep,
        complemento,
        numero,
        rua
      }
    })

    navigation.navigate("LoginScreen");
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '500',
            marginTop: 16,
          }}>
          Realize seu cadastro no aplicativo.
        </Text>
        <View style={styles.separator} />
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
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />

        <View style={styles.separator} />

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Administrador </Text>
          <Switch
            value={admin}
            onValueChange={setAdmin}
            style={{ marginLeft: 'auto' }}
          />
        </View>
      </ScrollView>

      <View style={styles.separator} />

      <View style={styles.separator} />

      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button
          title={'Voltar'}
          color="#2AA31A"
          onPress={() => {
            navigation.navigate('LoginScreen');
          }}
        />
        <Button title={'Cadastrar'} color="#2AA31A" onPress={handleCreate} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  separator: {
    marginTop: 10,
  },
});
