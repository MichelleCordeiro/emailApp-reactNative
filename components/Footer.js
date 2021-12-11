import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Footer() {
  return (
    <View style={styles.footer}>
      <View style={styles.footerColuna}>
        <FontAwesome5 style={styles.footerIconL} name="envelope" size={22} />
        <Text style={styles.textoFooter}>E-mail</Text>
      </View>
      <View style={styles.footerColuna}>
        <FontAwesome5 style={styles.footerIconR} name="video" size={20} />
        <Text style={styles.textoFooter}>Reunião</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#2e2f33',
    padding: 5
  },
  footerColuna: {
    flexDirection: 'column'
  },
  footerIconL: {
    color: '#a2cde7',
    marginHorizontal: 35,
    paddingVertical: 6,
    paddingHorizontal: 25,
    borderRadius: 25,
    backgroundColor: '#004a77'
  },
  footerIconR: {
    color: '#b9b9b9',
    marginHorizontal: 60,
    paddingVertical: 6
  },
  textoFooter: {
    textAlign: 'center',
    color: '#b9b9b9',
    fontWeight: 'bold'
  }
})
