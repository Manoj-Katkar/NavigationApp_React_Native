import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const AboutScreen = ({route}) => {

  // Now to access the name I have to destructure it from the 

  const {name} = route.params;              // !this very important step to get the actual data after de-structuring it 

  // Now aim is to re-direct the user to the Home component using the useNavigation() react hook remaing all process will be same as the navigation prop 

  const navigation = useNavigation();


  // useEffect(() => {
  //   console.log("About Us rendered............");
    
  // })



  //Dynamic Stack Navigator using the useLayoutEffect() hook   
  // second way to achieve Dynamic Stack Navigator   

  useLayoutEffect(() => {
    // we will use this in the AboutUs Screen because there the name we will recieve from the HomeScreen 
    navigation.setOptions({
      //here we pass options object 

      title:name,                       //name which we have extracted from the route.params using destructuring it 

    })
  } ,  [navigation , name])


  const navigateToHome = () => {

    //now re-direct the user to the Home screen 
    navigation.navigate('Home');     //inside the navigation object .navigate method will take the name of the screen to which you want to navigate 

  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>AboutUs {name}</Text>

      <Button
            title='Go To Home'

            onPress={navigateToHome}
      />

      <Button

          title='Update the name'

          onPress={() => {
            
            navigation.setParams({
              name:"Manoj With React Native"
            })
          }}
      
      />


      <Button
          
          title='Contact Screen'

          onPress={() => {
            navigation.navigate("Contact");
          }}
      
      />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"aqua"
    },
    text:{
        fontSize:24,
        fontWeight:"bold",
        marginBottom:16
    }
})

export default AboutScreen