import React from "react";
import {
    View,
    Text
} from "react-native";
import { Feather } from '@expo/vector-icons';

import styles from "./styles";

const { 
    container, 
    textTheme, 
} = styles;

const InconText = (props) => {

    const { 
        iconName, 
        iconColor, 
        bodyText, 
        bodyTextStyles,
    } = props;

    return (
        <View style={container}>
            <Feather
                name={iconName}
                size={50}
                color={iconColor}
            />
            <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
        </View>
    )
}

export default InconText;