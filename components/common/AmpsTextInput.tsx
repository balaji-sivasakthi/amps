import { View, Text, TextInput, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import React from 'react';

interface AmpsTextInputProps {
  title: string;
  style?: StyleProp<ViewStyle>;
}

export default function AmpsTextInput({ title, style }: AmpsTextInputProps) {
  return (
    <View style={style}>
      <Text style={{ fontWeight: 'bold', marginBottom: 5, fontSize: 18 }}>{title}</Text>
      <TextInput style={styles.textInputStyle} />
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
