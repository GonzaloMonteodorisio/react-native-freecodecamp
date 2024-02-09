import React from "react";

import { 
	View, 
	Text, 
} from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';

import CurrentWeather from "../../screens/CurrentWeather";
import UpcomingWeather from "../../screens/UpcomingWeather";
import City from "../../screens/City";

const Tab = createBottomTabNavigator();

/*
const CenteredLabel = ({ label, focused }) => (
  <View style={{ alignItems: 'center' }}>
    <Text style={{ color: focused ? 'tomato' : 'black', fontSize: 14, fontWeight: 'bold' }}>{label}</Text>
  </View>
);
*/

const Tabs = ({ weather }) => {
    return (
        <Tab.Navigator 
          screenOptions={{
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'grey',
              tabBarStyle: {
                  backgroundColor: 'lightblue'
              },
              headerStyle: {
                  backgroundColor: 'lightblue'
              },
              headerTitleStyle: {
                  fontWeight: 'bold',
                  fontSize: 25,
                  color: 'tomato'
              },
              headerTitleAlign: 'center'
          }}
        >
          <Tab.Screen 
            name="Current" 
            options={{
              // tabBarLabel: ({ focused }) =>  <CenteredLabel label="Current" focused={focused} />,
              tabBarIcon: ({ focused }) => (
                <Feather 
                  name="droplet" 
                  size={25}  
                  color={focused ? 'tomato' : 'black'}
                />)
            }}
          >
            {() => <CurrentWeather weatherData={weather.list[0]}/>}
          </Tab.Screen>
          <Tab.Screen 
            name="Upcoming" 
            component={UpcomingWeather} 
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather 
                  name="clock" 
                  size={25}  
                  color={focused ? 'tomato' : 'black'}
                />)
            }}
          />
          <Tab.Screen 
            name="City" 
            component={City} 
            options={{
              tabBarIcon: ({ focused }) => (
                <Feather 
                  name="home" 
                  size={25}  
                  color={focused ? 'tomato' : 'black'}
                />)
            }}
          />
        </Tab.Navigator>
    )
}

export default Tabs;