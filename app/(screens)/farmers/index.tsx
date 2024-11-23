import { StyleSheet } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/common/ThemedView';
import { Col, Row } from '@/components/common/Grid';
import AmpsTextInput from '@/components/common/AmpsTextInput';
import { Formik } from 'formik';
import AmpsButton from '@/components/common/AmpsButton';

const index = () => {
  return (
    <Formik initialValues={{ email: '' }} onSubmit={(values) => console.log(values)}>
      {({ handleChange, handleSubmit }) => (
        <ThemedView style={styles.container}>
          <ThemedView style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput onChangeText={handleChange} title="Farmer Name" />
              </Col>
              <Col numRows={2}>
                <AmpsTextInput onChangeText={handleChange} title="Farmer Mobile" />
              </Col>
            </Row>
            <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput onChangeText={handleChange} title="Farmer Street" />
              </Col>
              <Col numRows={2}>
                <AmpsTextInput onChangeText={handleChange} title="Farmer Town/City" />
              </Col>
            </Row>
          </ThemedView>
          <Row style={{ gap: 10, marginBottom: 20 }}>
            <Col numRows={2}>
              <AmpsButton
                variant="secondary"
                onPress={() => {
                  handleSubmit();
                }}
                title="CANCEL"
              />
            </Col>
            <Col numRows={2}>
              <AmpsButton
                variant="primary"
                onPress={() => {
                  handleSubmit();
                }}
                title="SAVE"
              />
            </Col>
          </Row>
        </ThemedView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    display: 'flex',
    alignItems: 'center',
  },
});

export default index;
