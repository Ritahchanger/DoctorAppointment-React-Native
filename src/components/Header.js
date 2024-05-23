// Header.js
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ title, icon }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        {icon && (
          <TouchableOpacity style={styles.backBtn}>
            <Image
              source={icon}
              style={styles.back}
            />
          </TouchableOpacity>
        )}
        <Text style={[styles.title, { marginLeft: icon ? 20 : 0 }]}>{title}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#f2f2f2',
  },
  safe: {
    backgroundColor: 'transparent',
  },
  back: {
    width: 24,
    height: 24,
  },
  backBtn: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
});
