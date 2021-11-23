import * as React from 'react';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

import { Logo } from 'ui';

export const NO_HEADER = {
  headerShown: false,
} as BottomTabNavigationOptions;

export const DEFAULT = {
  headerTitle: () => <Logo />,
};

export const BOTTOM_TAB_DEFAULT = {
  tabBarActiveTintColor: '#525050',
  tabBarInactiveTintColor: '#727171',
} as BottomTabNavigationOptions;
