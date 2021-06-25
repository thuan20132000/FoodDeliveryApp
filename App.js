import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { SCREEN } from './app/constants/index'
import { Home, OrderDelivery, Restaurant } from './app/screens/'
import Tabs from './app/navigation/tabs'
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name={SCREEN.Home} component={Tabs} />
        <Stack.Screen name={SCREEN.Restaurant} component={Restaurant} />
        <Stack.Screen name={SCREEN.OrderDelivery} component={OrderDelivery} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
