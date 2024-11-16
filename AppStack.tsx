import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import { Alert, Pressable, Text } from 'react-native';
import { StackNavigatorProps } from './interface';
import ContactScreen from './src/screens/contact_screen';


const Stack =  createNativeStackNavigator<StackNavigatorProps>();

// !implementing the nesting navigator 
export const AboutStack = () => {

  return (
        <Stack.Navigator initialRouteName='Home'

        screenOptions={{
          //^ giving the style to the header of the each screen 
          headerStyle:{
            backgroundColor:"red",       //it will change the background color of header of that screen
          
          },
          headerTintColor:"white",       //it will change the header text (title) color of that screen

          headerTitleStyle:{
            fontWeight:"bold"
          },

          // ^Now we have the headerLeft and headerRight options which allow adding the custom components to the left and right of the header of that particular screen 

          headerRight:() => {
            return (
                <Pressable onPress={() => Alert.alert("Right header Button pressed")} style={{backgroundColor:"aqua" , padding:7}}>
                  <Text style={{color:"black" , fontWeight:"bold"}}>
                      Right Button
                  </Text>
                </Pressable>
            )
          },

          headerLeft:() => {
            return(
              <Pressable onPress={() => Alert.alert("Left header Button pressed")} style={{backgroundColor:"aqua" , padding:7}}>
              <Text style={{color:"black" , fontWeight:"bold"}}>
                  Left Button
              </Text>
            </Pressable>
            )
          },

          contentStyle:{
          //  backgroundColor:"yellow",     //When you need specific styling for a screen's content area: 
          
          }
        }}
    >

      

      <Stack.Screen name='Home' component={HomeScreen} options={{

        title:"Welcome Home",                 //now this title will be read by the Home Screen 

        //^ giving the style to the header of the each screen 
        headerStyle:{
          backgroundColor:"red",       //it will change the background color of header of that screen
        
        },
        headerTintColor:"white",       //it will change the header text (title) color of that screen

        headerTitleStyle:{
          fontWeight:"bold"
        },

        // ^Now we have the headerLeft and headerRight options which allow adding the custom components to the left and right of the header of that particular screen 

        headerRight:() => {
          return (
              <Pressable onPress={() => Alert.alert("Right header Button pressed")} style={{backgroundColor:"aqua" , padding:7}}>
                <Text style={{color:"black" , fontWeight:"bold"}}>
                    Right Button
                </Text>
              </Pressable>
          )
        },

        headerLeft:() => {
          return(
            <Pressable onPress={() => Alert.alert("Left header Button pressed")} style={{backgroundColor:"aqua" , padding:7}}>
            <Text style={{color:"black" , fontWeight:"bold"}}>
                Left Button
            </Text>
          </Pressable>
          )
        },

        contentStyle:{
        //  backgroundColor:"yellow",     //When you need specific styling for a screen's content area: 
        
        }

      }}/>






      <Stack.Screen name='About' component={AboutScreen} 
      
      initialParams={{

        name:"Babu-Bhai"

      }}
      

      //! using options we can do dynamic stack navigation (Means dynamically we will update the AboutScreen Component data like below we are updating title )
      
      // options={({route}) => ({

      //   //step 1: we have to take the options which will specifies the function and that function will return the object 

      //   //step 2 : that function of the options will recieve route prop from the screen which we can de-structure to access the desired parameters 
      //   // and use them as part of the title 


      //   title: route.params.name,

      // })}
      
      
      
      />

      <Stack.Screen name='Contact' component={ContactScreen}/>





    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
        {/* Invoking the AboutStack */}
        <AboutStack/>

    </NavigationContainer>
  );
}