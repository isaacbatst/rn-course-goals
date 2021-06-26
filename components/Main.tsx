import React, { useState } from 'react';
import { View, Button, TextInput, StyleSheet, Text } from 'react-native';

function Main() {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState<string[]>([]);

  function handleGoalInput(text: string) {
    setGoal(text);
  }

  function handleAddGoal() {
    setGoals((currentGoals) => [...currentGoals, goal]);
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
        <Button onPress={handleAddGoal} title="Addsss" />
      </View>
      <View>
        {goals.map((thisGoal) => (
          <Text key={thisGoal}>{thisGoal}</Text>
        ))}
      </View>
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
