import type { NavigatorScreenParams } from '@react-navigation/native'; // eslint-disable-line

declare global {
  namespace ReactNavigation {
    interface EstablishmentParamList {
      Establishment: {
        name: string;
      };
    }

    interface RootParamList {
      Home: undefined;
      Requests: undefined;
      EstablishmentStack: NavigatorScreenParams<EstablishmentParamList>;
    }
  }
}
