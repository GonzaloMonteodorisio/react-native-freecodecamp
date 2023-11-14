import React from "react";
import { View, Text, Platform, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import { Feather } from '@expo/vector-icons';

import styles from "./styles";


const CurrentWeather = () => {

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Feather name="sun" size={100} color="black" />
        <Text>Current Weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWeather;