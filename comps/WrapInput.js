import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const WrapInput = ({ title, placeholder, error, description, isError }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {title} <Text style={{ color: 'red' }}>*</Text>
      </Text>
      <TextInput
        style={[styles.input, isError ? styles.inputError : styles.inputNormal]}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
      />
      {isError && <Text style={styles.error}>{error}</Text>}
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputNormal: {
    borderColor: '#ccc',
  },
  inputError: {
    borderColor: 'red',
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  description: {
    color: '#666',
    fontSize: 12,
    marginTop: 5,
  },
});

export default WrapInput;
