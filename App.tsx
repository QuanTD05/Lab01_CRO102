import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import Bai1 from './comps/bai';
import Bai2 from './comps/bai2';

const App = () => {
  const [screen, setScreen] = useState(null);

  const renderScreen = () => {
    if (screen === 'bai') return (
      <View style={styles.screenContainer}>
        <Bai1 />
        <View style={styles.backButtonContainer}>
          <Button title="Quay lại" onPress={() => setScreen(null)} />
        </View>
      </View>
    );
    if (screen === 'bai2') return (
      <View style={styles.screenContainer}>
        <Bai2 />
        <View style={styles.backButtonContainer}>
          <Button title="Quay lại" onPress={() => setScreen(null)} />
        </View>
      </View>
    );
    return (
      <View style={styles.buttonContainer}>
        <Button title="Bài 1" onPress={() => setScreen('bai')} />
        <Button title="Bài 2" onPress={() => setScreen('bai2')} />
      </View>
    );
  };

  return <View style={styles.container}>{renderScreen()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: '80%',
    gap: 10,
  },
  screenContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  backButtonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default App;
