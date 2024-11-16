import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const ContactScreen = () => {

    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>contact_screen</Text>

      <Button
            title='About-Screen'

            onPress={() => {
                navigation.navigate("About");
            }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "yellow"
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 16
    }
  })
  

export default ContactScreen