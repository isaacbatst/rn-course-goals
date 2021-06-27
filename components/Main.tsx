import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { Goal } from '../types';
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
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Goal"
          value={goal}
          onChangeText={handleGoalInput}
        />
        <Button onPress={handleAddGoal} title="ADD" />
      </View>
      <Goals goals={goals} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default Main;
