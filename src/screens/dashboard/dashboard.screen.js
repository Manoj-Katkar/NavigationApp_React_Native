import { View, Text, Button } from 'react-native'
import React from 'react'
import Header from './components/Header'


const dashboard = ({navigation}) => {
  return (
    <View>
      <Header/>

      <Button

        title='Toggle drawer'

        onPress={() => navigation.toggleDrawer()}   //to open the drawer from the left side 

        />


      <Button

      title='Settings'

      onPress={() => navigation.jumpTo('Settings')}   //to redirect to the settings page 

      />

    </View>
  )
}

export default dashboard