import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

export default function EmailScreen({ route }) {
  const { id } = route.params
  //console.log(id)
  const [email, setEmail] = useState([])

  useEffect(() => {
    async function getData() {
      const response = await fetch('https://mobile.ect.ufrn.br:3002/emails/' + id)
      const email = await response.json()
      setEmail(email)
      console.log(email)
    }
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.emailHeader}>
        <Text style={styles.emailTittle}>{email.tittle}</Text>
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
        <FontAwesome5 name="reply" size={16} color="gray" />
        <FontAwesome5 style={styles.emailIcon} name="ellipsis-v" size={16} color="gray" />
      </View>
      <Text style={styles.emailConteudo}> {email.body} </Text>
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
    color: '#d7d7d7'
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
    fontSize: 16,
    fontWeight: '500',
    color: '#d7d7d7',
    alignSelf: 'flex-start'
  }
})
