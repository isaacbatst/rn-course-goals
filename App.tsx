import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, StatusBar as StatusBarData } from 'react-native';
import FlexExample from './components/FlexExample';

export default function App() {
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <FlexExample />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBarData.currentHeight,
    flex:1
  },
  app: {
    flex: 1,
    backgroundColor: '#ff7',
  }
});
