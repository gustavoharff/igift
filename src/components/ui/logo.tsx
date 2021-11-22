import * as React from 'react';
import { Image, ImageProps } from 'react-native';

import { logo } from 'assets';

export function Logo(props: Omit<ImageProps, 'source'>) {
  return <Image {...props} source={logo} />;
}
