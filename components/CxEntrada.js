import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, Text, FlatList, TouchableOpacity } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function CxEntrada({ navigation }) {
  const [emails, setEmails] = useState([])

  useEffect(function () {
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3002/emails')
      //const response = await fetch('https://michellecordeiro.github.io/json/Data/emails.json')
      const emailServidor = await response.json()
      //console.log(emails)
      setEmails(emailServidor)
    }
    getData()
  }, [])

  function renderItem({ item }) {
    return (
      //console.log(item.star),
      <TouchableOpacity
        style={styles.emails}
        onPress={() => navigation.navigate('EmailScreen', { id: item.id })}
      >
        <Image style={styles.imgEmail} source={{ uri: item.picture }} />
        <View style={styles.email}>
          <Text style={styles.autor}>{item.to}</Text>
          <Text style={styles.titulo}>{item.tittle}</Text>
          <Text style={styles.resumo}>Resumo</Text>
        </View>
        <View style={styles.horaStar}>
          <Text style={styles.hora}>{item.time}</Text>
          {item.star == true ? (
            <FontAwesome5 name={'star'} solid size={18} color="#6495ed" />
          ) : (
            <FontAwesome5 name={'star'} size={18} color="#b9b9b9" />
          )}
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.cxEntrada}>
      <Text style={styles.textoCxEntr}>Todas as Cx. entrada</Text>
      <FlatList data={emails} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  )
}

const styles = StyleSheet.create({
  cxEntrada: {
    flex: 1,
    margin: 15
  },
  textoCxEntr: {
    color: '#d7d7d7',
    fontSize: 13
  },
  emails: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imgEmail: {
    height: 40,
    width: 40,
    borderRadius: 25,
    marginTop: 20,
    marginRight: 15,
    backgroundColor: 'gray'
  },
  email: {
    width: 250,
    marginTop: 15,
    marginBottom: 15
  },
  autor: {
    color: '#b9b9b9',
    fontSize: 18,
    fontWeight: 'bold'
  },
  titulo: {
    color: '#b9b9b9',
    fontSize: 15,
    fontWeight: 'bold'
  },
  resumo: {
    color: '#868686',
    fontSize: 14,
    fontWeight: 'bold'
  },
  horaStar: {
    width: 60,
    marginTop: 15,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 10
  },
  hora: {
    color: '#b9b9b9',
    fontSize: 13,
    fontWeight: 'bold'
  }
})
