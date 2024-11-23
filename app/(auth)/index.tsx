import React, { useEffect, useState } from 'react';
import AmpsButton from '@/components/common/AmpsButton';
import { Colors } from '@/constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { useRootNavigationState, useRouter, useSegments } from 'expo-router';
import { Image, StyleSheet, Text, View, TextInput } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '@/data/slice';
import { ThemedView } from '@/components/common/ThemedView';
import { Formik } from 'formik';
import { Col, Row } from '@/components/common/Grid';

export default function Auth() {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  const rootNavigationState = useRootNavigationState();
  const router = useRouter();
  const handleLogin = (values: any) => {
    router.replace('/(screens)/home');
  };
  useEffect(() => {
    if (isLoggedIn && rootNavigationState.routeNames?.includes('(screens)')) {
      router.replace('/(screens)/home');
    }
  }, [isLoggedIn, rootNavigationState]);

  return (
    <ThemedView style={{ flex: 1 }}>
      <Formik initialValues={{ email: '' }} onSubmit={handleLogin}>
        {({ handleChange, handleSubmit }) => (
          <Row
            style={{
              flex: 1,
              padding: 30,
              gap: 20,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Col numRows={2}>
              <Image style={styles.logoImage} source={require('../../assets/images/icon.png')} />
              <Text
                style={{
                  fontSize: 28,
                }}
              >
                Get Started
              </Text>
              <Text
                style={{
                  marginBottom: 30,
                }}
              >
                Welcome to Milk Collecting App - Let's Login In{' '}
              </Text>
              <TextInput
                onChangeText={handleChange}
                style={styles.inputStyle}
                underlineColorAndroid="transparent"
                placeholder="User Name"
                placeholderTextColor={Colors.light.primaryColor}
                autoCapitalize="none"
              />
              <TextInput
                onChangeText={handleChange}
                style={styles.inputStyle}
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor={Colors.light.primaryColor}
                autoCapitalize="none"
                secureTextEntry
              />
              <AmpsButton
                title="Submit"
                variant="primary"
                onPress={() => {
                  handleSubmit();
                }}
              />
            </Col>
            <Col numRows={2}>
              <LinearGradient
                colors={['#000403', '#034A1B', '#03521D', '#03521D', '#011408', '#011408']}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={styles.container}
              >
                <View>
                  <Text style={styles.textStyle}>
                    "Transforming dairy with smart, sustainable milk management for a connected
                    future."
                  </Text>
                </View>
                <Image
                  style={styles.heroImage}
                  source={require('../../assets/images/milk-hero.png')}
                />
              </LinearGradient>
            </Col>
          </Row>
        )}
      </Formik>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    position: 'relative',
  },
  inputStyle: {
    fontSize: 18,
    marginBottom: 10,
    height: 55,
    paddingLeft: 10,
    borderColor: Colors.light.primaryColor,
    borderRadius: 5,
    borderWidth: 1.5,
  },
  logoImage: {
    borderRadius: 10,
    width: 100,
    height: 100,
  },
  heroImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  textStyle: {
    fontSize: 48,
    color: '#fff',
  },
  content: {
    position: 'absolute',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
