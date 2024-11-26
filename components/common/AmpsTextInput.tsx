import { View, Text, TextInput, StyleSheet, TextInputProps } from 'react-native';
import React from 'react';

interface AmpsTextInputProps extends TextInputProps {
  title: string;
}

export default function AmpsTextInput({ title, style, ...rest }: AmpsTextInputProps) {
  return (
    <View style={style}>
      <Text style={{ fontWeight: 'bold', marginBottom: 5, fontSize: 18 }}>{title}</Text>
      <TextInput
        value={rest.value}
        style={[styles.textInputStyle, rest.editable ? {} : { backgroundColor: '#f2f2f2' }]}
        {...rest}
      />
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
    textTransform: 'capitalize',
  },
});
