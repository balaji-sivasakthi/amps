import { ActivityIndicator, Modal, StyleSheet } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/common/ThemedView';
import { Col, Row } from '@/components/common/Grid';
import AmpsTextInput from '@/components/common/AmpsTextInput';
import { Formik, useFormik, useFormikContext } from 'formik';
import AmpsButton from '@/components/common/AmpsButton';
import { createFarmer } from '@/data/slice/farmer.slice';
import Farmer from '@/api-sdk/models/farmer.model';
import { RootState, useAppDispatch } from '@/data/slice';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from '../../../drizzle/migrations';
import { db } from '@/db';
import { useSelector } from 'react-redux';
import { Colors } from '@/constants/Colors';
import AmpsLoader from '@/components/common/AmpsLoader';

const AddFarmer = () => {
  const { status } = useSelector((state: RootState) => state.farmer);

  const { success, error: dbError } = useMigrations(db, migrations);
  const dispatch = useAppDispatch();
  const handleSave = (values: Omit<Farmer, 'farmer_id' | 'id'>) => {
    if (success) {
      dispatch(
        createFarmer({
          name: values.name,
          mobile: values.mobile,
          city: values.city,
          street: values.street,
          account_no: values.account_no,
          bank_name: values.bank_name,
          ifsc: values.ifsc,
          branch: values.branch,
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
          street: '',
          city: '',
          account_no: '',
          bank_name: '',
          branch: '',
          ifsc: '',
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
            <Row style={{ gap: 10, marginBottom: 20 }}>
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
            </Row>
            <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput
                  value={values.street}
                  onChangeText={handleChange('street')}
                  title="Bank Name"
                />
              </Col>
              <Col numRows={2}>
                <AmpsTextInput
                  value={values.city}
                  onChangeText={handleChange('city')}
                  title="Account No"
                />
              </Col>
            </Row>
            <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput
                  value={values.street}
                  onChangeText={handleChange('street')}
                  title="Branch"
                />
              </Col>
              <Col numRows={2}>
                <AmpsTextInput
                  value={values.city}
                  onChangeText={handleChange('city')}
                  title="IFSC Code"
                />
              </Col>
            </Row>
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
          <AmpsLoader visible={status === 'loading'} />
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
