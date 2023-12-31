import React from "react";
import { 
  View, 
  Text, 
  SafeAreaView, 
  StatusBar 
} from "react-native";

import { Feather } from '@expo/vector-icons';

import RowText from "../../components/RowText";

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
        <RowText
          messageOne="High: 8 " 
          messageTwo="Low: 6"
          containerStyles={highLowWrapper}
          messageOneStyle={highLow}
          messageTwoStyle={highLow}
        />
      </View>
      <RowText
        messageOne="Its sunny" 
        messageTwo="Its perfect t-shirt weather"
        containerStyles={bodyWrapper}
        messageOneStyle={description}
        messageTwoStyle={message}
      />
    </SafeAreaView>
  );
};

export default CurrentWeather;