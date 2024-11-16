import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import AmpsCard from '../common/AmpsCard';
import { useRouter } from 'expo-router';

const MenuCard = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <AmpsCard
        onPress={() => {
          router.push('/collect');
        }}
        icon={<Image source={require('./../../assets/images/collect-icon.png')} />}
        title="Collect"
      />
      <AmpsCard
        onPress={() => {
          router.push('/report');
        }}
        icon={<Image source={require('./../../assets/images/report-icon.png')} />}
        title="Report"
      />
      <AmpsCard
        onPress={() => {
          router.push('/profile');
        }}
        icon={<Image source={require('./../../assets/images/profile-icon.png')} />}
        title="Profile"
      />
      <AmpsCard
        onPress={() => {
          router.push('/subscription');
        }}
        icon={<Image source={require('./../../assets/images/subscription-icon.png')} />}
        title="Subscription"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 40,
  },
});

export default MenuCard;
