import { View, Text, Alert, FlatList, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { ThemedView } from '@/components/common/ThemedView';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/data/slice';
import { deleteRateChart, fetchRateChart } from '@/data/slice/rate-chart.slice';
import { DataTable, Icon, IconButton, MD3Colors } from 'react-native-paper';
import { Colors } from '@/constants/Colors';

export default function RateChartScreen() {
  const { rateCharts, status } = useSelector((state: RootState) => state.rateChart);
  const dispatch = useAppDispatch();
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([10, 15, 25, 50]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, rateCharts.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  useEffect(() => {
    dispatch(fetchRateChart());
  }, []);

  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (!rateCharts || rateCharts.length === 0) {
    return (
      <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text>No Rate Chart available</Text>
      </View>
    );
  }

  return (
    <ThemedView style={{ flex: 1 }}>
      <DataTable>
        <DataTable.Header style={{ backgroundColor: Colors.light.primaryColor }}>
          <DataTable.Title textStyle={{ color: '#fff' }}>Range From</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Range To</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Rate</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Cow Type</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Commision</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Bonus</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Edit</DataTable.Title>
          <DataTable.Title textStyle={{ color: '#fff' }}>Delete</DataTable.Title>
        </DataTable.Header>

        {rateCharts.slice(from, to).map((item) => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.range_from}</DataTable.Cell>
            <DataTable.Cell>{item.range_to}</DataTable.Cell>
            <DataTable.Cell>{item.rate}</DataTable.Cell>
            <DataTable.Cell>{item.cowType}</DataTable.Cell>
            <DataTable.Cell>{item.commision}</DataTable.Cell>
            <DataTable.Cell>{item.bonus}</DataTable.Cell>
            <DataTable.Cell>
              <IconButton icon="pencil" />
            </DataTable.Cell>
            <DataTable.Cell>
              <IconButton
                onPress={() => {
                  dispatch(deleteRateChart(item.id));
                }}
                icon="delete"
                iconColor={MD3Colors.error50}
              />
            </DataTable.Cell>
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(rateCharts.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${rateCharts.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={'Rows per page'}
        />
      </DataTable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  farmerCard: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D9D9D9',
    padding: 30,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  farmerCardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  farmerCardSubTitle: {
    color: '#D9D9D9',
    fontSize: 18,
  },
});
