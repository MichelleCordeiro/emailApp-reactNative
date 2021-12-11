import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function CxEntrada() {
  return (
    <View style={styles.cxEntrada}>
      <Text style={styles.textoCxEntr}>Todas as Cx. entrada</Text>
      <View style={styles.emails}>
        <Image style={styles.imgEmail} source={require('../assets/images/userLogado.jpg')} />
        <View style={styles.email}>
          <Text style={styles.autor}>Autor</Text>
          <Text style={styles.titulo}>Titulo</Text>
          <Text style={styles.resumo}>Resumo</Text>
        </View>
        <View style={styles.horaStar}>
          <Text style={styles.hora}>Hora</Text>
          <FontAwesome5 name="star" size={18} color="red" />
        </View>
      </View>
      <View style={styles.emails}>
        <Image style={styles.imgEmail} source={require('../assets/images/userLogado.jpg')} />
        <View style={styles.email}>
          <Text style={styles.autor}>Autor</Text>
          <Text style={styles.titulo}>Titulo</Text>
          <Text style={styles.resumo}>Resumo</Text>
        </View>
        <View style={styles.horaStar}>
          <Text style={styles.hora}>Hora</Text>
          <FontAwesome5 name="star" size={18} color="red" />
        </View>
      </View>
      <View style={styles.emails}>
        <Image style={styles.imgEmail} source={require('../assets/images/userLogado.jpg')} />
        <View style={styles.email}>
          <Text style={styles.autor}>Autor</Text>
          <Text style={styles.titulo}>Titulo</Text>
          <Text style={styles.resumo}>Resumo</Text>
        </View>
        <View style={styles.horaStar}>
          <Text style={styles.hora}>Hora</Text>
          <FontAwesome5 name="star" size={18} color="red" />
        </View>
      </View>
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
    height: 45,
    width: 45,
    borderRadius: 25,
    marginTop: 15,
    marginRight: 15,
    backgroundColor: 'purple'
  },
  email: {
    width: 250,
    marginTop: 15,
    marginBottom: 15
  },
  autor: {
    color: '#b9b9b9',
    fontSize: 20,
    fontWeight: 'bold'
  },
  titulo: {
    color: '#b9b9b9',
    fontSize: 16,
    fontWeight: 'bold'
  },
  resumo: {
    color: '#868686',
    fontSize: 14,
    fontWeight: 'bold'
  },
  horaStar: {
    width: 50,
    marginTop: 15,
    marginBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingRight: 10
  },
  hora: {
    color: '#b9b9b9',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
