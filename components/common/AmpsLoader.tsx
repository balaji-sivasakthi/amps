import { View, Text, Modal, ActivityIndicator } from 'react-native';
import React from 'react';
import { ThemedView } from './ThemedView';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface AmpsLoaderProps {
  visible: boolean;
}

const AmpsLoader = ({ visible }: AmpsLoaderProps) => {
  return (
    <Modal transparent={true} visible={visible}>
      <ThemedView
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'space-around',
          backgroundColor: '#rgba(0, 0, 0, 0.5)',
          zIndex: 1000,
        }}
      >
        {visible && <ActivityIndicator size="large" color={Colors.light.primaryColor} />}
      </ThemedView>
    </Modal>
  );
};

export default AmpsLoader;
