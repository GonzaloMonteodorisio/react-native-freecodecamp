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
import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
  const [loading, error, weather] = useGetWeather();

  console.info('loading - App: ', loading);
  console.info('error - App: ', error);
  console.info('weather - App: ', weather);

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
