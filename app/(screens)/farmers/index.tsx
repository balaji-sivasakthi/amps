import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/data/slice';
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import { db } from '@/db';
import migrations from '@/drizzle/migrations';
import { fetchFarmers } from '@/data/slice/farmer.slice';
import { FarmerResponse } from '@/api-sdk/types/farmer.type';
import { ThemedView } from '@/components/common/ThemedView';
import { Col, Row } from '@/components/common/Grid';
import { Link } from 'expo-router';

// Render a single farmer item
const RenderItem = React.memo(({ item }: { item: FarmerResponse }) => (
  <View style={styles.farmerCard}>
    <View>
      <Text style={styles.farmerCardTitle}>{item.name}</Text>
      <Text style={styles.farmerCardSubTitle}>{item.farmer_id}</Text>
    </View>
    <View>
      <Link
        style={{
          color: '#0295FE',
          fontSize: 18,
          borderBottomWidth: 2,
          borderColor: '#0295FE',
        }}
        href={`/(screens)/farmers/${item.id}`}
      >
        View
      </Link>
    </View>
  </View>
));

const FarmerList = () => {
  const { error, farmers, status } = useSelector((state: RootState) => state.farmer);
  const { success, error: dbError } = useMigrations(db, migrations);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (success) {
      dispatch(fetchFarmers());
    }
    if (dbError) {
      console.error('Migration failed:', dbError);
    }
    // console.log('Farmers:', farmers);
  }, [success, dbError]);

  // Handle loading, empty state, and errors
  if (status === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (!farmers || farmers.length === 0) {
    return <Text>No farmers available</Text>;
  }

  console.log(farmers.filter((data) => !data.id));

  return (
    <ThemedView style={{ padding: 20, flex: 1 }}>
      <FlatList
        data={farmers.filter((data) => data.id) ?? []}
        renderItem={({ item }) => <RenderItem item={item} />}
        keyExtractor={(item) => item?.id?.toString() ?? ''}
      />
    </ThemedView>
  );
};

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

export default FarmerList;
