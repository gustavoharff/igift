import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen, SignUpScreen } from 'screens';

const Stack = createNativeStackNavigator();

export function LoginStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
