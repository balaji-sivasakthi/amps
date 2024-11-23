import {
  View,
  Text,
  TextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextInputBase,
  TextInputFocusEventData,
  NativeSyntheticEvent,
} from 'react-native';
import React from 'react';

interface AmpsTextInputProps {
  title: string;
  style?: StyleProp<ViewStyle>;
  onChangeText?: ((text: string) => void) | undefined;
  onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined;
  editable?: boolean;
  value?: string;
}

export default function AmpsTextInput({
  title,
  style,
  onChangeText,
  value,
  onBlur,
  editable = true,
}: AmpsTextInputProps) {
  return (
    <View style={style}>
      <Text style={{ fontWeight: 'bold', marginBottom: 5, fontSize: 18 }}>{title}</Text>
      <TextInput
        value={value}
        editable={editable}
        onChangeText={onChangeText}
        onBlur={onBlur}
        style={[styles.textInputStyle, editable ? {} : { backgroundColor: '#f2f2f2' }]}
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
