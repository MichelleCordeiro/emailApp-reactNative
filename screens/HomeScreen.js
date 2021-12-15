import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'

import Busca from '../components/Busca'
import Footer from '../components/Footer'
import CxEntrada from '../components/CxEntrada'

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#1f1f1f" />
      <Busca />
      <CxEntrada navigation={navigation} />
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    color: 'white',
    marginTop: Constants.statusBarHeight
  }
})
