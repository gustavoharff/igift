import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabRoutes } from './tab';
import { LojaStack } from './LojaStack';
import { LoginStack } from './LoginStack';
import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tab"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LojaStack"
        component={LojaStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export function Routes() {
  const { user } = React.useContext(AuthContext);

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <LoginStack />}
    </NavigationContainer>
  );
}
