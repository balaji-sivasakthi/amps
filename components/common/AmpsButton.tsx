import { Text, StyleSheet, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

interface AmpsButtonProps {
  variant: 'primary' | 'secondary';
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const AmpsButton = ({ onPress, title, variant, style }: AmpsButtonProps) => {
  return (
    <TouchableOpacity
      style={[variant === 'primary' ? styles.buttonPrimary : styles.buttonSecondary, style]}
      onPress={onPress}
    >
      <Text style={variant === 'primary' ? styles.buttonPrimaryText : styles.buttonSecondaryText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonPrimary: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.primaryColor,
    padding: 10,
    borderRadius: 5,
    height: 55,
  },
  buttonPrimaryText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
  buttonSecondary: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.light.primaryColor,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    height: 55,
  },
  buttonSecondaryText: {
    color: Colors.light.primaryColor,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
export default AmpsButton;
