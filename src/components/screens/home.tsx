import * as React from 'react';
import { ScrollView, View } from 'react-native';

import { EstablishmentList } from 'features';

export function HomeScreen() {
  return (
    <View>
      <ScrollView>
        <EstablishmentList
          title="Bazares"
          establishments={[
            'Intensivos Bazar',
            'Bazar Principal',
            'Bazar Diverso',
            'Diárias Bazar',
          ]}
        />

        <EstablishmentList
          title="Floriculturas"
          establishments={[
            'Radiante Floricultura',
            'Intensa Floricultura',
            'Eficaz Jardinagem',
            'Bacanas Jardinagem',
          ]}
        />

        <EstablishmentList
          title="Roupas"
          establishments={[
            'Radiante Floricultura',
            'Intensa Floricultura',
            'Eficaz Jardinagem',
            'Bacanas Jardinagem',
          ]}
        />
      </ScrollView>
    </View>
  );
}
