import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import Header from '../components/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header title='Doctor App' icon={require('../../assets/images/hospital.png')} />
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
});
