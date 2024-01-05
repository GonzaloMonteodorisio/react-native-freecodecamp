import React from "react";
import { 
  View, 
  Text, 
  SafeAreaView, 
  StatusBar 
} from "react-native";
import { Feather } from '@expo/vector-icons';
import RowText from "../../components/RowText";
import { weatherType } from "../../utilities/weatherType";

import styles from "./styles";

const CurrentWeather = () => {

  const { 
    Thuntherstorm, 
    Drizzle, 
    Rain, 
    Snow, 
    Clear, 
    Clouds,
    Haze, 
    Mist 
  } = weatherType;

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
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne="Its sunny" 
        messageTwo={Thuntherstorm.message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

export default CurrentWeather;