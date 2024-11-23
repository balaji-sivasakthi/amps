import { StyleSheet } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/common/ThemedView';
import { Col, Row } from '@/components/common/Grid';
import AmpsTextInput from '@/components/common/AmpsTextInput';
import { Formik } from 'formik';
import AmpsButton from '@/components/common/AmpsButton';
import { createFamer } from '@/data/slice/farmer.slice';
import Farmer from '@/api-sdk/models/farmer.model';
import { useAppDispatch } from '@/data/slice';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../../../drizzle/migrations';
import { db } from '@/db';

const AddFarmer = () => {
  const { success, error: dbError } = useMigrations(db, migrations);
  const dispatch = useAppDispatch();
  const handleSave = (values: Omit<Farmer, 'farmer_id' | 'id'>) => {
    if (success) {
      dispatch(
        createFamer({
          name: values.name,
          mobile: values.mobile,
        })
      );
    }
  };
  return (
    <Formik
      initialValues={
        {
          name: '',
          mobile: '',
        } as Omit<Farmer, 'farmer_id' | 'id'>
      }
      onSubmit={handleSave}
    >
      {({ values, handleChange, handleReset, handleSubmit }) => (
        <ThemedView style={styles.container}>
          <ThemedView style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput
                  value={values.name}
                  onChangeText={handleChange('name')}
                  title="Farmer Name"
                />
              </Col>
              <Col numRows={2}>
                <AmpsTextInput
                  value={values.mobile}
                  onChangeText={handleChange('mobile')}
                  title="Farmer Mobile"
                />
              </Col>
            </Row>
            {/* <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput
                  value={values.street}
                  onChangeText={handleChange('street')}
                  title="Farmer Street"
                />
              </Col>
              <Col numRows={2}>
                <AmpsTextInput
                  value={values.city}
                  onChangeText={handleChange('city')}
                  title="Farmer Town/City"
                />
              </Col>
            </Row> */}
          </ThemedView>
          <Row style={{ gap: 10, marginBottom: 20 }}>
            <Col numRows={2}>
              <AmpsButton
                variant="secondary"
                onPress={() => {
                  handleReset();
                }}
                title="RESET"
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

export default AddFarmer;
