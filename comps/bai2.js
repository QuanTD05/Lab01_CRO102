
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const eventInfo = [
  {
    title: 'Lịch trình',
    data: [
      { title: 'Ngày', content: '10/03/2025 - 12/03/2025' },
      { title: 'Thời gian', content: '08:00 - 17:00' },
    ],
    image: 'https://tse4.mm.bing.net/th?id=OIP.auyB5cJq_uO0fPE2gUYgtAHaE8&pid=Api&P=0&h=180',
  },
  {
    title: 'Khách sạn',
    data: [
      { title: 'Tên', content: 'Grand Hotel' },
      { title: 'Địa chỉ', content: '123 Đường ABC, TP.HCM' },
    ],
    image: 'https://tse4.mm.bing.net/th?id=OIP.auyB5cJq_uO0fPE2gUYgtAHaE8&pid=Api&P=0&h=180',
  },
];

const RenderChild = ({ data }) => {
  return (
    <View style={styles.containerChild}>
      <Text style={styles.titleChild}>{data.title}</Text>
      <Text style={styles.contentChild}>{data.content}</Text>
    </View>
  );
};

const RenderSection = ({ section }) => {
  return (
    <View style={styles.sectionContainer}>
      <Image source={{ uri: section.image }} style={styles.image} />
      <Text style={styles.sectionTitle}>{section.title}</Text>
      {section.data.map((item, index) => (
        <RenderChild key={index} data={item} />
      ))}
    </View>
  );
};

const App = () => {
  return (
    <FlatList
      style={styles.container}
      data={eventInfo}
      renderItem={({ item }) => <RenderSection section={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  sectionContainer: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  containerChild: {
    marginBottom: 5,
  },
  titleChild: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contentChild: {
    fontSize: 14,
    color: '#555',
  },
});

export default App;
