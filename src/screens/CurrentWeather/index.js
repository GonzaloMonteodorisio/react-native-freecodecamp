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
    main: { temp, feels_like, temp_max, temp_min }, 
    weather 
  } = weatherData;

  const weatherCondition = weather[0]?.main;

  return (
    <SafeAreaView 
      style={[
        wrapper, 
        { backgroundColor: weatherType[weatherCondition]?.backgroundColor }
      ]}>
      <StatusBar barStyle="light-content" />
      <View style={container}>
        <Feather name={weatherType[weatherCondition]?.icon} size={100} color="white" />
        <Text>Current Weather</Text>
        <Text style={tempStyles}>{`${temp}°`}</Text>
        <Text style={feels}>Feels like {`${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_max}° -`}
          messageTwo={` Low: ${temp_min}°`}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      <RowText
        messageOne={weather[0]?.description} 
        messageTwo={weatherType[weatherCondition]?.message}
        containerStyles={bodyWrapper}
        messageOneStyles={descriptionStyles}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

export default CurrentWeather;