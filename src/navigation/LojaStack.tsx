import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  LojaScreen,
  PedidoScreen,
  CategoriaScreen,
  CreateLojaScreen,
  CreateItemScreen,
  CreateEntregadorScreen,
} from 'screens';
import { HeaderBackButton } from '@react-navigation/elements';

const Stack = createNativeStackNavigator();

export function LojaStack() {
  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerLeft: props => (
          <HeaderBackButton
            {...props}
            onPress={navigation.goBack}
            tintColor="#FFBE51"
          />
        ),
      })}>
      <Stack.Screen name="LojaScreen" component={LojaScreen} />
      <Stack.Screen name="PedidoScreen" component={PedidoScreen} />
      <Stack.Screen name="CategoriaScreen" component={CategoriaScreen} />
      <Stack.Screen name="CreateLojaScreen" component={CreateLojaScreen} />
      <Stack.Screen name="CreateItemScreen" component={CreateItemScreen} />
      <Stack.Screen
        name="CreateEntregadorScreen"
        component={CreateEntregadorScreen}
      />
    </Stack.Navigator>
  );
}
