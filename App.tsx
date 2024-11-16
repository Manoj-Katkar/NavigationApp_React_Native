import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import { View, Text, StyleSheet , Image} from 'react-native'
import React from 'react'
import course_list from './src/screens/course_list/course_list.screen';
import profile from './src/screens/profile/profile.screen';
import setting from './src/screens/setting/setting.screen';
import { AboutStack } from './AppStack';




const googleIcon = require("./assets/images/icon.png") ;   //for typescript I have to mension this otherwise it will throw error 



const Tab = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    // tabBarLabelPosition:"beside-icon"   //by default it will be below icons which represent the name should display where in differant divices like tab and mobile it differs 

                    tabBarLabelPosition: "below-icon",

                    //tabBarShowLabel:false                //this will handle whether the to display the label or not label means that name only 

                    tabBarShowLabel: true,

                    tabBarActiveTintColor: "red",              //which sets the active tab label font color 

                    tabBarInactiveTintColor: "purple"            // this color will get apply to the labels which are currentlly in-active on our application 

                }}

                
            >
                <Tab.Screen name='Course List' component={course_list} />

                <Tab.Screen name='Profile' component={profile}

                    options={{
                        tabBarLabel: "My Profile",                      //!this will only change the label name of that tab navigation 

                         tabBarIcon: () => <Image source={googleIcon}  style={styles.image} resizeMode="contain"/>,

                        tabBarBadge: 3,                                  //!this will be used in the terms like we have to show the notification count then we can use it 

                    }}

                />

                <Tab.Screen name='Settings' component={setting} />

                {/* Creating the new Screen for doing the nesting navigation  */}
                {/* Thats It I have successfully implemented the nested navigation between the Stack And Tab Navigation  */}

                <Tab.Screen name='About Stack' component={AboutStack} options={{
                    
                    headerShown:false                // this will hide the current tab navigation header and we will get to display the Stack Navigation header 

                }}/>


            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        width:50
    }
})

export default App