import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, Requests } from 'screens';
import { TabBarIcon } from 'ui';

import { DEFAULT, BOTTOM_TAB_DEFAULT } from './helper';

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
            ...BOTTOM_TAB_DEFAULT,
            tabBarIcon: props => (
              <TabBarIcon
                name={props.focused ? 'gift' : 'giftOutline'}
                {...props}
              />
            ),
            tabBarLabel: 'Início',
          }}
        />

        <Tab.Screen
          name="Requests"
          component={Requests}
          options={{
            ...DEFAULT,
            ...BOTTOM_TAB_DEFAULT,
            tabBarIcon: props => (
              <TabBarIcon
                name={props.focused ? 'file' : 'fileOutline'}
                {...props}
              />
            ),
            tabBarLabel: 'Pedidos',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
