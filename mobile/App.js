import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gato Troll</Text>
      <Text style={styles.subtitle}>==== Gato Troll!!! ====</Text>
      <Text style={styles.subtitle}>==== Gato Zezinho !!! ====</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#279d55',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 36
  },
  subtitle: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
