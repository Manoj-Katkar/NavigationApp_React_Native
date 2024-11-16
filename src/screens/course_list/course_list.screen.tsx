import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const course_list = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>course_list</Text>
      
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


export default course_list