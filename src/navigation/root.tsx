import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TabRoutes } from './tab';
import { EstablishmentStack } from './establishment-stack';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={TabRoutes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EstablishmentStack"
          component={EstablishmentStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
