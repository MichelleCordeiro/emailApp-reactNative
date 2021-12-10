import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { FontAwesome5 } from '@expo/vector-icons'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="#1f1f1f" />
      <View style={styles.busca}>
        <FontAwesome5 name="bars" size={18} color="#d5d6d7" />
        <Text style={styles.textoBusca}>Pesquisar no e-mail</Text>
        <Image
          style={styles.userLogado}
          source={require('./assets/images/userLogado.jpg')}
        />
      </View>
      <View style={styles.cxEntrada}>
        <Text style={styles.textoCxEntr}>Todas as Cx. entrada</Text>
        <View style={styles.emails}>
          <View style={styles.email}>
            <Image style={styles.imgEmail} />
          </View>
          <View style={styles.email}>
            <Image style={styles.imgEmail} />
          </View>
          <View style={styles.email}>
            <Image style={styles.imgEmail} />
          </View>
        </View>
      </View>
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
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    color: 'white',
    marginTop: Constants.statusBarHeight
  },
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
    height: 35,
    width: 35,
    borderRadius: 25
  },
  cxEntrada: {
    flex: 1,
    padding: 15
  },
  textoCxEntr: {
    color: '#d7d7d7',
    fontSize: 13
  },
  emails: {
    backgroundColor: 'pink'
  },
  email: {
    flexDirection: 'row',
    height: 60,
    marginTop: 15,
    backgroundColor: 'gray'
  },
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
