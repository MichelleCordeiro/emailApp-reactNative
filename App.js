import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { FontAwesome5 } from '@expo/vector-icons'

import Busca from './components/Busca'
import Footer from './components/Footer'
import CxEntrada from './components/CxEntrada'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#1f1f1f" />
      <Busca />
      <CxEntrada />
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

// busca background
// #313237
// busca fonte
// #898a8c  7f8083  1d2d4d

// email background
// #1f1f1f
// assunto fonte #909090
// conteúdo fonte #868686

// parte de baixox
//#2e2f33
