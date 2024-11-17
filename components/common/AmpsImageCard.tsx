import { View, Text, StyleSheet, ImageBackground, ImageURISource } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

interface AmpsImageCardProps {
  src: ImageURISource;
  title: string;
  description: string;
  onPress: () => void;
}

const AmpsImageCard = ({ src, title, description, onPress }: AmpsImageCardProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
        source={src || require('../../assets/images/icon.png')}
      >
        <View style={styles.content}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title}>{title}</Text>
            <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 500,
    height: 200,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
});

export default AmpsImageCard;
