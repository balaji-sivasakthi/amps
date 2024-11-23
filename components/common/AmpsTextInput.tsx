import { View, Text, TextInput, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React from 'react';

interface AmpsTextInputProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  onChangeText?: ((text: string) => void) | undefined;
}

export default function AmpsTextInput({ title, style, onChangeText }: AmpsTextInputProps) {
  return (
    <View style={style}>
      <Text style={{ fontWeight: 'bold', marginBottom: 5, fontSize: 18 }}>{title}</Text>
      <TextInput onChangeText={onChangeText} style={styles.textInputStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    marginTop: 5,
    borderWidth: 1,
    borderColor: '#C7C7C7',
    borderRadius: 5,
    padding: 16,
    fontSize: 28,
  },
});
