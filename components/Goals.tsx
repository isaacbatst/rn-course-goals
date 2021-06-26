import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { List } from '../types';

function Goals({ goals }: { goals: List }) {
  return (
    <FlatList
      data={goals}
      renderItem={(thisGoal) => (
        <View style={styles.goalContainer}>
          <Text>{thisGoal.item.value}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: '#fff',
    borderWidth: 1,
  },
});

export default Goals;
