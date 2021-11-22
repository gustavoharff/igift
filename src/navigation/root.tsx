import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from 'screens';
import { TabBarIcon } from 'ui';

import { DEFAULT } from './helper';

const Tab = createBottomTabNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ tabBarStyle: { height: 56 } }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            ...DEFAULT,
            tabBarIcon: props => <TabBarIcon name="gift" {...props} />,
            tabBarLabel: 'Início',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
