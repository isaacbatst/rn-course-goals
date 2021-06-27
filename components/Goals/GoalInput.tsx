import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput({
  handleAddGoal,
}: {
  handleAddGoal: (goal: string) => void;
}) {
  const [goal, setGoal] = useState('');

  function handleGoalInput(text: string) {
    setGoal(text);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Goal"
        value={goal}
        onChangeText={handleGoalInput}
      />
      <Button onPress={() => handleAddGoal(goal)} title="ADD" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
