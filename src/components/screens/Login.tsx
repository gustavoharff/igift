import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { Input, Logo } from 'ui';
import { AuthContext } from '../../context/AuthContext';

export function LoginScreen() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { auth } = React.useContext(AuthContext);

  const navigation = useNavigation();

  async function handleLogin() {
    try {
      await auth({ email, senha: password });
    } catch {
      Alert.alert(
        'Atenção',
        'Não foi possível realizar o login, verifique suas credencias e tente novamente.',
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Logo style={styles.logoImg} />
        <Text style={styles.title}>iGift</Text>
        <Text style={styles.description}>Realize seu login no aplicativo.</Text>
      </View>

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

      <View style={styles.separator} />

      <Button title={'Entrar'} color="#2AA31A" onPress={handleLogin} />

      <View style={styles.separator} />

      <Button
        title={'Cadastrar'}
        color="#2AA31A"
        onPress={() => {
          navigation.navigate('SignUpScreen');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 16,
    color: '#2AA31A',
  },
  description: {
    color: '#CBD64A',
    marginTop: 16,
    fontSize: 16,
  },
  logo: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 16,
  },
  logoImg: {
    width: 60,
    height: 60,
  },
  separator: {
    marginTop: 16,
  },
});
