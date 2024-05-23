import React from 'react';
import { Image, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header
        title="Doctor App"
        icon={require('../../assets/images/hospital.png')}
      />
      <Image
        source={require('../../assets/images/osi.webp')}
        style={styles.banner}
      />
      <Text style={styles.heading}>Select Category</Text>

      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7]}
        horizontal
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{`Category ${index + 1}`}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner: {
    width: '90%',
    height: 200,
    alignSelf: 'center',
    marginTop: 10,
  },
  heading: {
    color: '#000',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 20,
  },
  flatListContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
  },
  categoryContainer: {
    width: 120,
    height: 100,
    backgroundColor: '#4c669f',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  categoryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
