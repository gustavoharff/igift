import * as React from 'react';
import { IconProps as RNIconProps } from 'react-native-vector-icons/Icon';

import { map } from './map';

interface IconProps extends RNIconProps {
  name: keyof typeof map;
}

export function Icon({ name, ...rest }: IconProps) {
  const { Font, name: iconName } = map[name];

  return <Font name={iconName} {...rest} />;
}
