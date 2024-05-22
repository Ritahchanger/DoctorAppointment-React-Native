import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text>Denno Hospital</Text>
      <Image
        source={require('../../assets/images/hospital.png')}
        style={styles.logo}
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue'
  },
  logo: {
    width: 100,
    height: 100,
    tintColor: '#fff'
  }
})
