import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, StatusBar as StatusBarData } from 'react-native';
import Main from './components/Main';

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Main />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBarData.currentHeight,
    paddingHorizontal: 50,
    flex: 1,
  },
  app: {
    flex: 1,
    backgroundColor: '#ff7',
  },
});
