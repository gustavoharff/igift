import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { InicioScreen, PedidosScreen, AdminScreen } from 'screens';
import { Icon, TabBarIcon } from 'ui';
import { AuthContext } from '../context/AuthContext';
import { BOTTOM_TAB_DEFAULT, DEFAULT } from './helper';

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  const { user, logout } = React.useContext(AuthContext);

  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { height: 56 } }}>
      <Tab.Screen
        name="Inicio"
        component={InicioScreen}
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

      {user?.administrador && (
        <Tab.Screen name="Admin" component={AdminScreen} 
        options={{
          ...DEFAULT,
          ...BOTTOM_TAB_DEFAULT,
          tabBarIcon: props => (
            <TabBarIcon
              name={props.focused ? 'accountCog' : 'accountCogOutline'}
              {...props}
            />
          ),
          tabBarLabel: 'Administração',
        }}
        />
      )}

      <Tab.Screen
        name="Pedidos"
        component={PedidosScreen}
        options={{
          ...DEFAULT,
          ...BOTTOM_TAB_DEFAULT,
          headerRight: () => (
            <TouchableOpacity onPress={logout}>
              <Icon
              name="logout"
              color="red"
              style={{ marginRight: 16 }}
              size={24}
            />
            </TouchableOpacity>
            
          ),
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
  );
}
