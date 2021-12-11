import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function Busca() {
  return (
    <View style={styles.busca}>
      <FontAwesome5 name="bars" size={18} color="#d5d6d7" />
      <Text style={styles.textoBusca}>Pesquisar no e-mail</Text>
      <Image style={styles.userLogado} source={require('../assets/images/userLogado.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({
  busca: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 50,
    marginTop: 10,
    marginHorizontal: 15,
    paddingLeft: 10,
    backgroundColor: '#313237',
    borderRadius: 25
  },
  textoBusca: {
    fontSize: 16,
    width: 260,
    alignItems: 'flex-start',
    textAlign: 'left',
    paddingHorizontal: 5,
    color: '#d7d7d7'
  },
  userLogado: {
    height: 32,
    width: 32,
    borderRadius: 25
  }
})
