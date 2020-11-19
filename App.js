import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { Main } from './components/Main'

// to hide warnings uncomment below
// console.disableYellowBox = true;

export default function App() {
  return (
    <Main />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a9a9a9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
  },
});
