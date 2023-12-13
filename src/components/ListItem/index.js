import React from "react";
import { 
    Text, 
    View 
} from "react-native";

import { Feather } from '@expo/vector-icons';

import styles from "./styles";

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props;
    const { item, date, temp } = styles;
    return (
        <View style={item}>
            <Feather
                name="sun"
                size={50}
                color={"white"}
            />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    );
}

export default ListItem;