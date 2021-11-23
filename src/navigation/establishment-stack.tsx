import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { EstablishmentScreen } from 'screens';

const Stack = createNativeStackNavigator();

export function EstablishmentStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Establishment" component={EstablishmentScreen} />
    </Stack.Navigator>
  );
}
