import AmpsButton from '@/components/common/AmpsButton';
import AmpsTextInput from '@/components/common/AmpsTextInput';
import { Col, Row } from '@/components/common/Grid';
import { ThemedView } from '@/components/common/ThemedView';
import { RootState, useAppDispatch } from '@/data/slice';
import { createProcurement } from '@/data/slice/procurement.slice';
import { db } from '@/db';
import { Procurement } from '@/db/schema/procurements';
import { rateChartsTable } from '@/db/schema/rate-chart';
import { convertLitreToKg } from '@/utils/converter';
import { and, sql } from 'drizzle-orm';
import { Formik } from 'formik';
import React from 'react';
import { Alert, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

export default function AddProcurement() {
  const { farmers } = useSelector((state: RootState) => state.farmer);
  const dispatch = useAppDispatch();
  const calculateRatePerLitre = (fat: string, snf: string) => {
    if (snf == '' || fat == '') return '0';
    const totalSolid = parseFloat(snf) + parseFloat(fat);
    const rateChart = db
      .select()
      .from(rateChartsTable)
      .where(
        and(
          sql`${totalSolid} BETWEEN ${rateChartsTable.range_from} AND ${rateChartsTable.range_to}`
        )
      )
      .all();
    if (!rateChart || rateChart?.length == 0) {
      return '0';
    }
    return ((parseFloat(snf) + parseFloat(fat)) * rateChart?.[0]?.rate).toFixed(3.0);
  };
  const calulateTotalAmount = (ratePerLitre: string, litre: string) => {
    if (ratePerLitre == '' || litre == '') return '0';
    return (parseFloat(ratePerLitre) * parseFloat(litre)).toFixed(3);
  };

  const handleProcurementSubmit = (procurement: Procurement) => {
    const { fat, snf, litre } = procurement;
    const ratePerLitre = calculateRatePerLitre(fat.toString(), snf.toString());
    dispatch(
      createProcurement({
        ...procurement,
        rate_per_litre: ratePerLitre,
        total_amount: calulateTotalAmount(ratePerLitre, litre.toString()),
      })
    );
    // console.log({
    //   ...procurement,
    //   rate_per_litre: ratePerLitre,
    //   total_amount: calulateTotalAmount(ratePerLitre, litre.toString()),
    // });
  };

  return (
    <Formik
      initialValues={
        {
          farmer_id: '',
          farmer_name: '',
          snf: 0,
          fat: 0,
          litre: 0,
          kg: 0,
          rate_per_litre: '',
          total_amount: '',
        } as unknown as Procurement & { farmer_name: string }
      }
      enableReinitialize
      onSubmit={handleProcurementSubmit}
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
                    inputText={values.farmer_id}
                  />
                </Col>
                <Col numRows={2}>
                  <AmpsTextInput
                    editable={false}
                    onChangeText={handleChange('farmer_name')}
                    title="Farmer Name"
                    inputText={values.farmer_name}
                  />
                </Col>
              </Row>
              <Row style={{ gap: 10, marginBottom: 20 }}>
                <Col numRows={2}>
                  <AmpsTextInput
                    onChangeText={handleChange('snf')}
                    title="SNF"
                    keyboardType="numeric"
                    inputText={values.snf}
                  />
                </Col>
                <Col numRows={2}>
                  <AmpsTextInput
                    onChangeText={handleChange('fat')}
                    title="FAT"
                    keyboardType="numeric"
                    inputText={values.fat}
                  />
                </Col>
              </Row>
              <Row style={{ gap: 10, marginBottom: 20 }}>
                <Col numRows={2}>
                  <AmpsTextInput
                    onChangeText={handleChange('litre')}
                    title="Litre"
                    keyboardType="number-pad"
                    inputText={values.litre}
                  />
                </Col>
                <Col numRows={2}>
                  <AmpsTextInput
                    editable={false}
                    onChangeText={handleChange('kg')}
                    title="KG"
                    keyboardType="numeric"
                    showSoftInputOnFocus={false}
                    inputText={convertLitreToKg(values.litre.toString()) ?? ''}
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
                    inputText={calculateRatePerLitre(values.fat.toString(), values.snf.toString())}
                  />
                </Col>
                <Col numRows={2}>
                  <AmpsTextInput
                    onChangeText={handleChange('total_amount')}
                    title="Total Amount"
                    keyboardType="numeric"
                    editable={false}
                    inputText={calulateTotalAmount(
                      calculateRatePerLitre(values.fat.toString(), values.snf.toString()),
                      values.litre.toString()
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
