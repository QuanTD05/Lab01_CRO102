import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

// Header Custom Component
interface HeaderProps {
  renderLeft?: () => JSX.Element;
  renderCenter?: () => JSX.Element;
  renderRight?: () => JSX.Element;
}

const Header: React.FC<HeaderProps> = ({ renderLeft, renderCenter, renderRight }) => {
  return (
    <View style={headerStyles.header}>
      <View style={headerStyles.side}>{renderLeft && renderLeft()}</View>
      <View style={headerStyles.center}>{renderCenter && renderCenter()}</View>
      <View style={headerStyles.side}>{renderRight && renderRight()}</View>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee',
    width: '100%',
  },
  side: { flex: 1, alignItems: 'center' },
  center: { flex: 3, alignItems: 'center', backgroundColor:"yellow" },
});

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
      <Header
        renderLeft={() => <Text>Left 1</Text>}
        renderCenter={() => <Text>Center 1</Text>}
        renderRight={() => <Text>Right 1</Text>}
      />
      <Header
        renderLeft={() => <Text>Left 2</Text>}
        renderCenter={() => <Text>Center 2</Text>}
        renderRight={() => <Text>Right 2</Text>}
      />
      <Header
        renderLeft={() => <Text>Left 3</Text>}
        renderCenter={() => <Text>Center 3</Text>}
        renderRight={() => <Text>Right 3</Text>}
      />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
});