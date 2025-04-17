import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/data/slice';
import { deleteProcurement, fetchProcurement } from '@/data/slice/procurement.slice';
import { ThemedView } from '@/components/common/ThemedView';
import { DataTable, IconButton, MD3Colors } from 'react-native-paper';
import { Colors } from '@/constants/Colors';
import { deleteRateChart } from '@/data/slice/rate-chart.slice';
import { Calendar } from 'react-native-calendars';
import RNDateTimePicker from '@react-native-community/datetimepicker';

const ProcurementsScreen = () => {
  const { procurements, status } = useSelector((state: RootState) => state.procurement);
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([10, 15, 25, 50]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, procurements.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  useEffect(() => {
    dispatch(fetchProcurement());
  }, []);

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }
  if (!procurements || procurements.length === 0) {
    return (
      <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text>No Procurement available</Text>
      </View>
    );
  }

  return (
    <ThemedView style={{ flex: 1 }}>
      <DataTable>
        <DataTable.Header style={{ backgroundColor: Colors.light.primaryColor }}>
          <DataTable.Title textStyle={{ color: '#fff' }}>Farmer ID</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Fat</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>SNF</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Litre</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Rate/Litre</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Total</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Edit</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Delete</DataTable.Title>
        </DataTable.Header>

        {procurements.slice(from, to).map((item) => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.farmer_id}</DataTable.Cell>
            <DataTable.Cell>{item.fat}</DataTable.Cell>
            <DataTable.Cell>{item.snf}</DataTable.Cell>
            <DataTable.Cell>{item.litre}</DataTable.Cell>
            <DataTable.Cell>{item.rate_per_litre}</DataTable.Cell>
            <DataTable.Cell>{item.total_amount}</DataTable.Cell>
            <DataTable.Cell>
              <IconButton icon="pencil" />
            </DataTable.Cell>
            <DataTable.Cell>
              <IconButton
                onPress={() => {
                  dispatch(deleteProcurement(item.id));
                }}
                icon="delete"
                iconColor={MD3Colors.error50}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(procurements.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${procurements.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>
    </ThemedView>
  );
};

export default ProcurementsScreen;
