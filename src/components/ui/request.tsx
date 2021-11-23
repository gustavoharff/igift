import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';

import { establishmentDefault } from 'assets';
import { Icon } from 'ui';

export type Request = {
  number: number;
  date: string;
  establishment: string;
  done: boolean;
};

interface RequestProps {
  request: Request;
}

export function Request({
  request: { date, establishment, done, number },
}: RequestProps) {
  return (
    <View>
      <Text style={styles.date}>{moment(date).format('ll')}</Text>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Image source={establishmentDefault} style={styles.logo} />
          <Text style={styles.establishment}>{establishment}</Text>
        </View>

        {done ? (
          <View style={styles.status}>
            <Icon name="check" style={styles.icon} size={24} color="#49BE20" />
            <Text>Pedido número {number} concluído</Text>
          </View>
        ) : (
          <View style={styles.status}>
            <Icon name="close" style={styles.icon} size={24} color="#CC2525" />
            <Text>Pedido cancelado</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 8,
    padding: 16,
    backgroundColor: 'rgba(196, 196, 196, 0.4)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    marginBottom: 8,
    color: '#525050',
    fontWeight: '500',
    textAlign: 'right',
    marginRight: 8,
  },
  logo: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#C4C4C4',
  },
  establishment: {
    color: '#525050',
    marginLeft: 8,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 8,
  },
  status: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
