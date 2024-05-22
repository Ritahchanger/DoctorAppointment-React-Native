import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Header = () => {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/arrow.png')}
            style={styles.back}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Header

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
        backgroundColor: 'transparent', 
      },
      safe:{
        background:'transparent'
      },
  back: {
    width: 24,
    height: 24
  }
})
