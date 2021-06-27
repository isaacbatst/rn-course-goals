import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { Goal } from '../../types';

function GoalItem({ goal }: { goal: Goal }) {
  return (
    <TouchableNativeFeedback onPress={() => console.log('test')}>
      <View style={styles.goalContainer}>
        <Text>{goal.value}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowColor: 'white',
    shadowOpacity: 1,
  },
});

export default GoalItem;
