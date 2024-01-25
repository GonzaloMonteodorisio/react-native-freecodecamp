import React, { useState, useEffect } from "react";

import { 
  ActivityIndicator, 
  View, 
  StyleSheet,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./src/components/Tabs";

import { useGetWeather } from "./src/hooks/useGetWeather";

const App = () => {
  const [loading, error, weather] = useGetWeather();

  console.info('loading - App.js: ', loading);
  console.info('error - App.js: ', error);

  if (weather && weather?.list) {
    console.info('weather - App.js: ', weather);
    return (
      <NavigationContainer>
        <Tabs weather={weather}/>
      </NavigationContainer>
    );
  }

  return(
    <View style={styles.container}>
      <ActivityIndicator 
        size="large"
        color="blue"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default App;
