import React, { useState, useEffect } from "react";
import { 
  ActivityIndicator, 
  View, 
  StyleSheet,
} from "react-native"; 
import * as Location from 'expo-location';
import { NavigationContainer } from "@react-navigation/native";

import Tabs from "./src/components/Tabs";


const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  console.info('Location - App: ', Location);

  useEffect(() => {
    (async() => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.info('status - App!!!!!!!!!!!!!!!!!!!!!!: ', status);

      /*
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        console.info('Error: Permission to access location was denied');
        return;
      }
      */

      try {
        let location = await Location.getCurrentPositionAsync();
        console.info('location - App!!!!!!!!!!!!!!!!!!!!!!: ', location);
        setLocation(location);
        setLoading(false);
      } catch (error) {
        console.error('Error getting location:', error);
        setError('Error getting location');
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })()
  }, []);

  if (location) {
    console.info('location - App: ', location);
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
