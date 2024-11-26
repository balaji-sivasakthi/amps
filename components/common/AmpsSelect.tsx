import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Dropdown } from 'react-native-element-dropdown';

interface AmpsDropDownProps {
  data: {
    label: string;
    value: string;
  }[];
  placeholder: string;
}

const AmpsDropDown = ({ data, placeholder }: AmpsDropDownProps) => {
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      placeholder={placeholder}
      labelField="label"
      onChange={() => {}}
      valueField="label"
      data={data}
    />
  );
};

const styles = StyleSheet.create({
  dropdown: {
    marginTop: 35,
    borderWidth: 1,
    borderColor: '#C7C7C7',
    borderRadius: 5,
    padding: 24,
    fontSize: 28,
    textTransform: 'capitalize',
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default AmpsDropDown;
