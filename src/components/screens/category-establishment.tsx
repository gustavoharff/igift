import * as React from 'react';

import { EstablishmentVerticalList } from 'features';

export function CategoryEstablishemnt() {
  return (
    <EstablishmentVerticalList
      title="Bazares"
      establishments={[
        'Intensivos Bazar',
        'Bazar Principal',
        'Bazar Diverso',
        'Diárias Bazar',
      ]}
    />
  );
}
