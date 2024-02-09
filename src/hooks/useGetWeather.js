import React, { useState, useEffect } from "react";
import * as Location from 'expo-location';
import { OPEN_WEATHER_API_KEY } from '@env';

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState(null);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  console.info('Location - useGetWeather: ', Location);
  console.info('OPEN_WEATHER_API_KEY - useGetWeather: ', OPEN_WEATHER_API_KEY);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPEN_WEATHER_API_KEY}`);

      const data = await response.json();

      console.info('data - fetchWeatherdata - useGetWeather: ', data);

      setWeather(data);
    } catch (error) {
      console.info('error - fetchWeatherData - useGetWeather: ', error);
      setError('Could not fetch weather');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.info('status - useGetWeather: ', status);

      if (status !== 'granted') {
        setError('Permission to access location was denied');
        console.info('Error: Permission to access location was denied');
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync();
        console.info('location - useGetWeather: ', location);
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
  return [loading, error, weather];
}