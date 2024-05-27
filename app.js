import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <Text style={styles.boldText}>Prince Henry</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',  // Change the background color to your preference
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,  // Increase font size to 24
  },
  boldText: {
    fontWeight: 'bold',  // Make "Prince Henry" bold
  }
});
