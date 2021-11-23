import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HeaderBackButton } from '@react-navigation/elements';
import * as React from 'react';
import { View } from 'react-native';

type Props = NativeStackScreenProps<
  // @ts-expect-error
  ReactNavigation.EstablishmentParamList,
  'Establishment'
>;

export function EstablishmentScreen({ route, navigation }: Props) {
  const { name } = route.params;

  React.useEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerLeft: props => (
        <HeaderBackButton
          {...props}
          onPress={navigation.goBack}
          tintColor="#FFBE51"
        />
      ),
    });
  }, [name, navigation]);

  return <View />;
}
