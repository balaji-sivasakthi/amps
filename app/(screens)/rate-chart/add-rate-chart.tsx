import { StyleSheet } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/common/ThemedView';
import { Col, Row } from '@/components/common/Grid';
import AmpsTextInput from '@/components/common/AmpsTextInput';
import { Formik } from 'formik';
import AmpsButton from '@/components/common/AmpsButton';
import { RootState, useAppDispatch } from '@/data/slice';
import { useSelector } from 'react-redux';
import AmpsLoader from '@/components/common/AmpsLoader';
import AmpsDropDown from '@/components/common/AmpsSelect';
import RateChart from '@/api-sdk/models/ratechart.model';
import { createRateChart } from '@/data/slice/rate-chart.slice';

const AddRateChartScreen = () => {
  const { status } = useSelector((state: RootState) => state.farmer);
  const dispatch = useAppDispatch();
  const handleSave = (values: Omit<RateChart, 'id'>) => {
    dispatch(createRateChart({ ...values }));
  };
  return (
    <Formik
      initialValues={
        {
          bonus: 0,
          commision: 0,
          cowType: 'cow',
          range_from: 0,
          range_to: 0,
          rate: 0,
        } as Omit<RateChart, 'id'>
      }
      onSubmit={handleSave}
    >
      {({ values, handleChange, handleReset, handleSubmit }) => (
        <ThemedView style={styles.container}>
          <ThemedView style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
            <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput
                  inputText={values.range_from}
                  onChangeText={handleChange('range_from')}
                  title="Range From"
                />
              </Col>
              <Col numRows={2}>
                <AmpsTextInput
                  inputText={values.range_to}
                  onChangeText={handleChange('range_to')}
                  title="Range To"
                />
              </Col>
            </Row>
            <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput
                  inputText={values.rate}
                  onChangeText={handleChange('rate')}
                  title="RATE"
                />
              </Col>
              <Col numRows={2}>
                <AmpsDropDown
                  placeholder="Select Cow type"
                  data={[
                    {
                      label: 'Cow',
                      value: 'cow',
                    },
                    {
                      label: 'buff',
                      value: 'buff',
                    },
                  ]}
                />
              </Col>
            </Row>
            <Row style={{ gap: 10, marginBottom: 20 }}>
              <Col numRows={2}>
                <AmpsTextInput
                  inputText={`${values.commision}`}
                  onChangeText={handleChange('commision')}
                  title="Commision"
                />
              </Col>
              <Col numRows={2}>
                <AmpsTextInput
                  inputText={`${values.bonus}`}
                  onChangeText={handleChange('bonus')}
                  title="Bonus"
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

export default AddRateChartScreen;
