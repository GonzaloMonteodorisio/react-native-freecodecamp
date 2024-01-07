import React, { useState, useEffect } from "react";

import { 
  ActivityIndicator, 
  View, 
  StyleSheet,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import * as Location from 'expo-location';

import Tabs from "./src/components/Tabs";

import { OPEN_WEATHER_API_KEY } from '@env';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=proccess.env.OPEN_WEATHER_API_KEY


const App = () => {

  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const fetchWeatherData = async(latitude, longitude, openweatherAPIKey) => {

    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openweatherAPIKey}`);

      const data = await response.json();
  
      // console.info('data - fetchWeatherData - App.js: ', data);
  
      setWeather(data);
    } catch(error) {
      console.info('error - catch - fetchWeatherData - App.js: ', error);
      setError('Could not fetch weather');
    } finally {
      setLoading(false);
    }
  } 

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.info('status - requestForegroundPermissionsAsync - App.js: ', status);

      if (status !== 'granted') {
        setError('Permission to access Location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      if (location?.coords?.latitude) {
        setLatitude(location.coords.latitude);
      }

      if (location?.coords?.longitude) {
        setLongitude(location.coords.longitude);
      }

      if (latitude && longitude) {
        await fetchWeatherData(latitude, longitude, process.env.OPEN_WEATHER_API_KEY);
      }
    })();
  }, [latitude, longitude]);

  if (weather) {
    console.info('weather - App.js: ', weather);
  }

  if (location) {
    console.info('location - App.j: ', location);
  }

  if (loading) {
    return(
      <View style={styles.container}>
        <ActivityIndicator 
          size="large"
          color="blue"
        />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default App;
