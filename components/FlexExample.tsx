import React from "react";
import { View, Text, StyleSheet } from "react-native";

function FlexExample(){
  
  return (
    <View style={styles.container}>
      <Text style={styles.first}>1</Text>
      <Text style={styles.second}>2</Text>
      <Text style={styles.third}>3</Text>
    </View>
    )
  }
  
  
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      height: 300,
    },
    first: {
      backgroundColor: '#00f',
      flex: 1,
    }, 
    second: {
      backgroundColor: '#0f0',
      flex: 1,
    },
    third: {
      backgroundColor: '#f00',
    }
  })
  
  export default FlexExample;