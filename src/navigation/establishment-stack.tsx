import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  EstablishmentScreen,
  RequestFormScreen,
  CategoryEstablishemnt,
} from 'screens';
import { HeaderBackButton } from '@react-navigation/elements';

const Stack = createNativeStackNavigator();

export function EstablishmentStack() {
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
      <Stack.Screen name="Establishment" component={EstablishmentScreen} />
      <Stack.Screen name="RequestFormScreen" component={RequestFormScreen} />
      <Stack.Screen
        name="CategoryEstablishemnt"
        component={CategoryEstablishemnt}
      />
    </Stack.Navigator>
  );
}
