import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const profile = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>profile.screen</Text>
      
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      fontSize: 25,
      fontWeight: "bold",
      marginBottom: 16,
      color:"black"
    },
});


export default profile