import React from "react";
import { 
  View, 
  Text, 
  SafeAreaView, 
  StatusBar 
} from "react-native";

import { Feather } from '@expo/vector-icons';

import styles from "./styles";

const CurrentWeather = () => {

  const { 
    wrapper, 
    container, 
    temp, 
    feels, 
    highLowWrapper, 
    highLow, 
    bodyWrapper, 
    description, 
    message 
  } = styles;

  return (
    <SafeAreaView style={wrapper}>
      <StatusBar barStyle="light-content" />
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text>Current Weather</Text>
        <Text style={temp}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        <View style={highLowWrapper}>
          <Text style={highLow}>High: 8 </Text>
          <Text style={highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={bodyWrapper}>
        <Text style={description}>Its sunny</Text>
        <Text style={message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

export default CurrentWeather;