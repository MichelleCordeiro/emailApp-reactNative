import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screens/HomeScreen'
import EmailScreen from './screens/EmailScreen'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="EmailScreen"
          component={EmailScreen}
          options={{
            title: '',
            headerStyle: { backgroundColor: '#1f1f1f' },
            headerTintColor: '#f0f0f0'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
