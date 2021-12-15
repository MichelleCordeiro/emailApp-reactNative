import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar'

export default function EmailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Email Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    color: 'white'
  }
})
