import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect } from 'react'

const HomeScreen = ({ navigation }) => {    //by default each screen will have the prop as navigation we have to destructure it and use it 

  useEffect(() => {

    console.log("Home Rendered ");

  }, [])

  


  let navigateTOAbout = () => {

    //now re-direct the user to the About screen 
    navigation.navigate('About', {
      
      name: "Manoj"      // data that we are passing from the home to the about section 

    });    //inside the navigation object .navigate method will take the name of the screen to which you want to navigate 


  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>

      <Button
        title='Go To About'
        onPress={navigateTOAbout}
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

export default HomeScreen