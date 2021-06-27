import React, { useState } from 'react';
import { View } from 'react-native';
import { Goal } from '../types';
import GoalInput from './Goals/GoalInput';
import Goals from './Goals/Goals';

function Main() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal(goal: string) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goal },
    ]);
  }

  return (
    <View>
      <GoalInput handleAddGoal={handleAddGoal} />
      <Goals goals={goals} />
    </View>
  );
}

export default Main;
