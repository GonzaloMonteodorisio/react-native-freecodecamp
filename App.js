import React, { useState, useEffect } from "react";
import { 
  ActivityIndicator, 
  View, 
  StyleSheet,
} from "react-native"; 
import * as Location from 'expo-location';
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import { OPEN_WEATHER_API_KEY } from '@env';



const App = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  console.info('Location - App: ', Location);
  console.info('OPEN_WEATHER_API_KEY - App: ', OPEN_WEATHER_API_KEY);

  const fetchWeatherData = async() => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`);

      const data = await response.json();
  
      console.info('data - fetchWeatherdata - App: ' , data);
  
      setWeather(data);   
    } catch (error) {
      console.info('error - fetchWeatherData - App: ', error);
      setError('Could not fetch weather');
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.info('status - App!!!!!!!!!!!!!!!!!!!!!!: ', status);

      if (status !== 'granted') {
        setError('Permission to access location was denied');
        console.info('Error: Permission to access location was denied');
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync();
        console.info('location - App!!!!!!!!!!!!!!!!!!!!!!: ', location);
        setLat(location?.coords?.latitude);
        setLon(location?.coords?.longitude);
        await fetchWeatherData();
      } catch (error) {
        console.error('Error getting location:', error);
        setError('Error getting location');
      } finally {
        setLoading(false);
      }
    })()
  }, [lat, lon]);

  if (weather) {
    console.info('weather - App: ', weather);
  }

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          size="large"
          color="blue"
        />
      ) : (
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default App;
