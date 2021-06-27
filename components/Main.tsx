import React, { useState } from 'react';
import { View } from 'react-native';
import { Goal } from '../types';
import GoalInput from './Goals/GoalInput';
import Goals from './Goals/Goals';

function Main() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleGoalInput(text: string) {
    setGoal(text);
  }

  function handleAddGoal() {
    setGoals((currentGoals) => [
      ...currentGoals,
      { key: Math.random().toString(), value: goal },
    ]);
  }

  return (
    <View>
      <GoalInput
        goal={goal}
        handleAddGoal={handleAddGoal}
        handleGoalInput={handleGoalInput}
      />
      <Goals goals={goals} />
    </View>
  );
}

export default Main;
