import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput({
  goal,
  handleAddGoal,
  handleGoalInput,
}: {
  goal: string;
  handleAddGoal: () => void;
  handleGoalInput: (text: string) => void;
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Goal"
        value={goal}
        onChangeText={handleGoalInput}
      />
      <Button onPress={handleAddGoal} title="ADD" />
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

export default GoalInput;
