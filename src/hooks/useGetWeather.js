import React, { useState, useEffect } from "react";

import * as Location from 'expo-location';

import { OPEN_WEATHER_API_KEY } from '@env';

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=proccess.env.OPEN_WEATHER_API_KEY

export const useGetWeather = () => {

  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const fetchWeatherData = async(latitude, longitude, openweatherAPIKey) => {

      try {
        // Obtener la hora actual en formato ISO 8601
        const horaActual = new Date().getTime();

        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${openweatherAPIKey}&units=metric&dt=${horaActual}`);
  
        const data = await response.json();

        console.info('data - useGetWeather: ', data);
    
        setWeather(data);
      } catch(error) {
        console.info('error - catch - fetchWeatherData - useGetWeather: ', error);
        setError('Could not fetch weather');
      } finally {
        setLoading(false);
      }
    } 
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.info('status - requestForegroundPermissionsAsync - useGetWeather: ', status);

      if (status !== 'granted') {
        setError('Permission to access Location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      if (location) {
        console.info('location - useGetWeather: ', location);
      }

      if (location?.coords?.latitude) {
        // setLatitude(location.coords.latitude);
        setLatitude('-32.9440');
      }

      if (location?.coords?.longitude) {
        // setLongitude(location.coords.longitude);
        setLongitude('-60.6500');
      }

      if (latitude && longitude) {
        await fetchWeatherData(latitude, longitude, OPEN_WEATHER_API_KEY);
      }
    })();
  }, [latitude, longitude]); 
  return [loading, error, weather];
}