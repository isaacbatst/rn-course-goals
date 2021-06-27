import React from 'react';
import { FlatList } from 'react-native';
import { Goal } from '../../types';
import GoalItem from './GoalItem';

function Goals({ goals }: { goals: Goal[] }) {
  return (
    <FlatList
      data={goals}
      renderItem={(goalItem) => <GoalItem goal={goalItem.item} />}
    />
  );
}

export default Goals;
