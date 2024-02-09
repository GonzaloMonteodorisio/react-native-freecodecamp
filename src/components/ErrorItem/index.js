import React from "react";
import { 
    Text,
    View,
} from "react-native";
import { Feather } from '@expo/vector-icons';

import styles from "./styles";

const { container, errorMessage, } = styles;

const ErrorItem = () => {
  return (
    <View style={container}>
      <Text style={errorMessage}>Sorry, something went wrong</Text>
      <Feather
        name="frown"
        size={100}
        color="white"
      />
    </View>
  )
}

export default ErrorItem;