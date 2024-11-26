import Farmer from '@/api-sdk/models/farmer.model';
import AmpsButton from '@/components/common/AmpsButton';
import AmpsTextInput from '@/components/common/AmpsTextInput';
import { Col, Row } from '@/components/common/Grid';
import { ThemedView } from '@/components/common/ThemedView';
import { RootState } from '@/data/slice';
import { convertLitreToKg } from '@/utils/converter';
import { Formik } from 'formik';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function CollectScreen() {
  const { farmers } = useSelector((state: RootState) => state.farmer);
  const calculateRatePerLitre = (fat: string, snf: string) => {
    if (snf == '' || fat == '') return '0';
    const testTs = 3.0;
    return ((parseFloat(snf) + parseFloat(fat)) * testTs).toFixed(3.0);
  };
  const calulateTotalAmount = (ratePerLitre: string, litre: string) => {
    if (ratePerLitre == '' || litre == '') return '0';
    return (parseFloat(ratePerLitre) * parseFloat(litre)).toFixed(3);
  };
  return (
    <Formik
      initialValues={{
        farmer_id: '',
        farmer_name: '',
        snf: '',
        fat: '',
        litre: '0',
        kg: '0',
        rate_per_litre: '',
        toal_amount: '',
      }}
      enableReinitialize
      onSubmit={(values) => console.log(values)}
    >
      {({ values, handleChange, handleSubmit, setFieldValue }) => {
        const handleIdBlur = () => {
          const farmerDetails = farmers.find(
            (farmer) => String(farmer?.farmer_id) == String(values?.farmer_id)
          );
          if (!farmerDetails) {
            Alert.alert('Error', 'User not found');
          }
          setFieldValue('farmer_name', farmerDetails?.name ?? '');
        };
        return (
          <ThemedView style={styles.container}>
            <ThemedView style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <Row style={{ gap: 10, marginBottom: 20 }}>
                <Col numRows={2}>
                  <AmpsTextInput
                    onBlur={handleIdBlur}
                    onChangeText={handleChange('farmer_id')}
                    title="Farmer ID"
                    keyboardType="numeric"
                    value={values.farmer_id}
                  />
                </Col>
                <Col numRows={2}>
                  <AmpsTextInput
                    editable={false}
                    onChangeText={handleChange('farmer_name')}
                    title="Farmer Name"
                    value={values.farmer_name}
                  />
                </Col>
              </Row>
              <Row style={{ gap: 10, marginBottom: 20 }}>
                <Col numRows={2}>
                  <AmpsTextInput
                    onChangeText={handleChange('snf')}
                    title="SNF"
                    keyboardType="numeric"
                    value={values.snf}
                  />
                </Col>
                <Col numRows={2}>
                  <AmpsTextInput
                    onChangeText={handleChange('fat')}
                    title="FAT"
                    keyboardType="numeric"
                    value={values.fat}
                  />
                </Col>
              </Row>
              <Row style={{ gap: 10, marginBottom: 20 }}>
                <Col numRows={2}>
                  <AmpsTextInput
                    onChangeText={handleChange('litre')}
                    title="Litre"
                    keyboardType="number-pad"
                    value={values.litre}
                  />
                </Col>
                <Col numRows={2}>
                  <AmpsTextInput
                    editable={false}
                    onChangeText={handleChange('kg')}
                    title="KG"
                    keyboardType="numeric"
                    showSoftInputOnFocus={false}
                    value={convertLitreToKg(values.litre)}
                  />
                </Col>
              </Row>
              <Row style={{ gap: 10, marginBottom: 20 }}>
                <Col numRows={2}>
                  <AmpsTextInput
                    onChangeText={handleChange('rate_per_litre')}
                    title="Rate/Litre"
                    keyboardType="numeric"
                    editable={false}
                    value={calculateRatePerLitre(values.fat, values.snf)}
                  />
                </Col>
                <Col numRows={2}>
                  <AmpsTextInput
                    onChangeText={handleChange('total_amount')}
                    title="Total Amount"
                    keyboardType="numeric"
                    editable={false}
                    value={calulateTotalAmount(
                      calculateRatePerLitre(values.fat, values.snf),
                      values.litre
                    )}
                  />
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
        );
      }}
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
