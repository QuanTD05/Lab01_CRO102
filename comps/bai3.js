import React from 'react';
import { View, StyleSheet } from 'react-native';
import WrapInput from './WrapInput';

const Bai3 = () => {
  return (
    <View style={styles.container}>
      <WrapInput title="Title" placeholder="Place holder" />
      <WrapInput title="Title" placeholder="Place holder" isError={false} />
      <WrapInput title="Title" placeholder="Place holder" isError error="Error Description"  />
      <WrapInput title="Title" placeholder="Place holder" isError error="Error Description" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default Bai3;
