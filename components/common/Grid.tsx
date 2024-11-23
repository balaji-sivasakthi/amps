import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface ColProps {
  numRows: 1 | 2 | 3 | 4;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface RowProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Col: React.FC<ColProps> = ({ numRows, children, style }) => {
  return <View style={[styles[`${numRows}col` as keyof typeof styles], style]}>{children}</View>;
};

const Row: React.FC<RowProps> = ({ children, style }) => (
  <View style={[styles.row, style]}>{children}</View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  '1col': {
    borderColor: '#fff',
    borderWidth: 1,
    flex: 1,
  },
  '2col': {
    borderColor: '#fff',
    borderWidth: 1,
    flex: 2,
  },
  '3col': {
    borderColor: '#fff',
    borderWidth: 1,
    flex: 3,
  },
  '4col': {
    flex: 4,
  },
});

export { Row, Col };
