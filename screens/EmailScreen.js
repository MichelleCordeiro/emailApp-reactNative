import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function EmailScreen({ route }) {
  const { id } = route.params
  //console.log(id)
  const [email, setEmail] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/' + id)
      const servidorEmail = await response.json()
      setEmail(servidorEmail)
      //console.log(servidorEmail)
    }
    getData()
  }, [])
  return (
    <View style={styles.container}>
      <View style={styles.emailHeader}>
        <View style={styles.emailHeader}>
          <Text style={styles.emailTittle}>{email.tittle}</Text>
          <Text style={styles.emailTag}>Entrada</Text>
        </View>
        {email.star == true ? (
          <FontAwesome5 name={'star'} solid size={18} color="#6495ed" />
        ) : (
          <FontAwesome5 name={'star'} size={18} color="#b9b9b9" />
        )}
      </View>
      <View style={styles.emailInfos}>
        <Image style={styles.emailPicture} source={{ uri: email.picture }} />
        <View style={styles.emailInfosDetails}>
          <Text style={styles.emailFrom}> {email.from} </Text>
          <Text style={styles.emailFromTime}> {email.time} </Text>
        </View>
        <FontAwesome5
          name="reply"
          size={16}
          color="gray"
          onPress={() => alert('Futura Implementação ')}
        />
        <FontAwesome5
          style={styles.emailIcon}
          name="ellipsis-v"
          size={16}
          color="gray"
          onPress={() => alert('Futura Implementação ')}
        />
      </View>
      <Text style={styles.emailConteudo}> {email.body} </Text>
      <View style={styles.emailFooter}>
        <TouchableOpacity
          style={styles.footerButtons}
          onPress={() => alert('Futura Implementação ')}
        >
          <FontAwesome5 style={styles.footerIcon} name="reply" size={18} />
          <Text style={styles.textoFooter}>Responder</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButtons}
          onPress={() => alert('Futura Implementação ')}
        >
          <FontAwesome5 style={styles.footerIcon} name="reply-all" size={18} />
          <Text style={styles.textoFooter}>Responder a todos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerButtons}
          onPress={() => alert('Futura Implementação ')}
        >
          <FontAwesome5 style={styles.footerIcon} name="share" size={18} />
          <Text style={styles.textoFooter}>Encaminhar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#1f1f1f',
    color: 'white'
  },
  emailHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  emailTittle: {
    fontSize: 24,
    fontWeight: '500',
    color: '#d7d7d7',
    paddingRight: 10
  },
  emailTag: {
    paddingRight: 5,
    paddingLeft: 7,
    alignContent: 'flex-end',
    color: '#898a8c',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray'
  },
  emailInfos: {
    flexDirection: 'row',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  emailPicture: {
    height: 45,
    width: 45,
    borderRadius: 25,
    backgroundColor: 'gray'
  },
  emailInfosDetails: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    width: 250
  },
  emailFrom: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    color: '#d7d7d7',
    fontSize: 18
  },
  emailFromTime: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    color: '#b9b9b9'
  },
  emailIcon: {
    marginLeft: 20,
    marginRight: 5
  },
  emailConteudo: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#d7d7d7',
    alignSelf: 'flex-start'
  },
  emailFooter: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  footerButtons: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 33,
    paddingVertical: 10,
    marginHorizontal: 5
  },
  footerIcon: {
    color: '#b9b9b9',
    alignSelf: 'center'
  },
  textoFooter: {
    flexWrap: 'wrap',
    textAlign: 'center',
    color: '#b9b9b9',
    fontWeight: '500'
  }
})
