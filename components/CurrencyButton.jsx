import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrencyButton = ({ Currency }) => {
  console.log(Currency); // Ensure Currency object is logged correctly

  return (
    <View style={styles.container}>
      <Text style={styles.flag}>{Currency.flag}</Text>
      <Text style={styles.country}>{Currency.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff', // Changed background color for visibility
    width: 300,
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 8,
    padding: 8,
  },
  flag: {
    fontSize: 28,
    color: 'red',
    marginBottom: 4,
  },
  country: {
    fontSize: 14,
    color: 'green',
  },
});

export default CurrencyButton;
