import 'react-native-gesture-handler';   //!make sure it is at the top and nothing is there before it 
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { View, Text } from 'react-native'
import React from 'react'
import dashboard from './src/screens/dashboard/dashboard.screen';
import setting from './src/screens/setting/setting.screen';



const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator>

            <Drawer.Screen name='Dashboard' component={dashboard}
            
            options={{
                title: "My dashboard",                     //this will change the header title Dashboard to  My dashboard as well as it will change the drawer label         

                drawerLabel: "Dashboard label",            // you can change the drawer label specifically title will also change but drawerLabel is prefered to change the drawer label

                drawerActiveTintColor: "#333",              // this will change the color of the text for that particular drawer 

                drawerActiveBackgroundColor: "lightblue",    // this will change the background-color of  that particular drawer 

                drawerContentStyle: {                        //this will be used for the entirelly drawer color and set the background color 
                  backgroundColor: "#c6cbef",
                },
            }}
            
            
            />
            <Drawer.Screen name='Settings' component={setting}/>

        </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App