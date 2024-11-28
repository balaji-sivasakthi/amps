import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SubscriptionScreen() {
  const plans = [
    {
      name: 'Basic Plan',
      features: ['Collection', 'Report'],
      price: 'Rs. 200/month',
    },
    {
      name: 'Platinum Plan',
      features: ['Collection', 'Report', 'Dashboard'],
      price: 'Rs. 400/month',
    },
    {
      name: 'Gold Plan',
      features: ['Collection', 'Report', 'Dashboard', 'SMS'],
      price: 'Rs. 600/month',
    },
  ];

  return (
    <View style={styles.container}>
      {plans?.map((plan, index) => (
        <LinearGradient
          key={index}
          colors={['black', 'green', 'black']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.card}
        >
          <View style={styles.header}>
            <Text style={styles.title}>{plan.name}</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.features}>
              {plan.features.map((feature, idx) => (
                <Text key={idx} style={styles.featureText}>
                  {`${idx + 1}. ${feature}`}
                </Text>
              ))}
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.price}>{plan.price}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Upgrade</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    top: 96,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: 'green',
    borderRadius: 15,
    justifyContent: 'space-around',
    padding: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 14,
    width: 380,
    height: 550,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    height: 'auto',
  },
  features: {
    marginBottom: 10,
    rowGap: 12,
  },
  featureText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#e0e0e0',
  },
  price: {
    fontSize: 24,
    fontWeight: '600',
    color: '#e0e0e0',
    marginBottom: 20,
    textAlign: 'center',
  },
  footer: {},
  button: {
    alignSelf: 'center',
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
    width: 240,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e0e0e0',
    textAlign: 'center',
  },
});
