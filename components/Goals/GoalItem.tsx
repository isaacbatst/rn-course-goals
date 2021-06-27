import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Goal } from '../../types';

function GoalItem({ goal }: { goal: Goal }) {
  return (
    <View style={styles.goalContainer}>
      <Text>{goal.value}</Text>
    </View>
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

export default GoalItem;
