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

const CurrentWeather = ({ weatherData }) => {
  console.info('weatherData - CurrentWeather: ', weatherData);

  const { 
    wrapper, 
    container, 
    temp: tempStyles, 
    feels, 
    highLowWrapper, 
    highLow, 
    bodyWrapper, 
    description: descriptionStyles, 
    message 
  } = styles;

  const { 
    main: { temp, feels_like, tepm_max, temp_min }, 
    weather 
  } = weatherData;

  const firstWeather = weather[0];

  const { main } = firstWeather;
  const { description } = firstWeather;

  console.info('firstWeather - CurrentWeather: ', firstWeather);
  console.info('weatherType[main] - CurrentWeather: ', weatherType[main]);

  return (
    <SafeAreaView 
      style={[
        wrapper, 
        { backgroundColor: weatherType[main].backgroundColor }
      ]}>
      <StatusBar barStyle="light-content" />
      <View style={container}>
        <Feather name={weatherType[main].icon} size={100} color="white" />
        <Text>Current Weather</Text>
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>Feels like {`${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${tepm_max}`}
          messageTwo={`low: ${temp_min}`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={description} 
        messageTwo={weatherType[main].message}
        containerStyles={bodyWrapper}
        messageOneStyles={descriptionStyles}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

export default CurrentWeather;