import * as React from 'react';

import { map } from './map';
import { Icon } from './icon';

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
  name: keyof typeof map;
}

export function TabBarIcon({ name, color, size }: TabBarIconProps) {
  return <Icon name={name} color={color} size={size} />;
}
