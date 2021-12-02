import * as React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Entregador, Loja } from '../../@types';

interface LojasModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  lojas: Loja[];
  onLojaPress: (loja: Loja) => void;
}

export function LojasModal({
  isVisible,
  onRequestClose,
  lojas,
  onLojaPress
}: LojasModalProps) {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onRequestClose}
      onBackButtonPress={onRequestClose}
      onSwipeComplete={onRequestClose}
      swipeDirection="down"
      propagateSwipe
      style={styles.modal}>
      <View style={styles.container}>
        <Text style={styles.title}>Lojas disponíveis</Text>
        <Text style={styles.description}>Selecione a loja desejado</Text>
        <FlatList
          data={lojas}
          ListEmptyComponent={<Text>Nenhuma loja disponivel</Text>}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => {
              onLojaPress(item)
              onRequestClose()
            }}>
              <Text style={styles.entregador}>{item.nome}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </Modal>
  );
}

const { height } = Dimensions.get('screen');

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#60605F'
  },
  description: {
    fontSize: 16,
    color: '#60605F',
    marginTop: 16,
  },
  entregador: {
    paddingVertical: 16,
    fontSize: 15,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DEDED9',
    marginTop: 16,
    color: '#5B5B59'
  },
  container: {
    maxHeight: height * 0.8,
    borderTopLeftRadius: 40 / 2,
    borderTopRightRadius: 40 / 2,
    backgroundColor: '#BFBFBF',
    padding: 16,
  },
});
