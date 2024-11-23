import AmpsButton from '@/components/common/AmpsButton';
import AmpsTextInput from '@/components/common/AmpsTextInput';
import { Col, Row } from '@/components/common/Grid';
import { ThemedView } from '@/components/common/ThemedView';
import { Formik } from 'formik';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function CollectScreen() {
  return (
    <Formik initialValues={{ email: '' }} onSubmit={(values) => console.log(values)}>
      {({ handleChange, handleSubmit }) => (
        <ThemedView style={styles.container}>
          <ThemedView style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput onChangeText={handleChange} title="Farmer ID" />
              </Col>
              <Col numRows={2}>
                <AmpsTextInput onChangeText={handleChange} editable={false} title="Farmer Name" />
              </Col>
            </Row>
            <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput onChangeText={handleChange} title="SNF" />
              </Col>
              <Col numRows={2}>
                <AmpsTextInput onChangeText={handleChange} title="FAT" />
              </Col>
            </Row>
            <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput onChangeText={handleChange} title="Litre" />
              </Col>
              <Col numRows={2}>
                <AmpsTextInput onChangeText={handleChange} title="KG" />
              </Col>
            </Row>
            <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput onChangeText={handleChange} title="Rate/Litre" />
              </Col>
              <Col numRows={2}>
                <AmpsTextInput onChangeText={handleChange} title="Total Amount" />
              </Col>
            </Row>
          </ThemedView>
          <Row style={{ gap: 10, marginBottom: 20 }}>
            <Col numRows={2}>
              <AmpsButton
                variant="primary"
                onPress={() => {
                  handleSubmit();
                }}
                title="NO BILL AND SAVE"
              />
            </Col>
            <Col numRows={2}>
              <AmpsButton
                variant="primary"
                onPress={() => {
                  handleSubmit();
                }}
                title="PRINT"
              />
            </Col>
          </Row>
        </ThemedView>
      )}
    </Formik>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    display: 'flex',
    alignItems: 'center',
  },
});
