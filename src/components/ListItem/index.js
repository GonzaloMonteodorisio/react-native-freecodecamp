import React from "react";
import { 
    Text, 
    View 
} from "react-native";

import { Feather } from '@expo/vector-icons';

import moment from "moment";

import { weatherType } from "../../utilities/weatherType";

import styles from "./styles";

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props;
    const { item, date, temp, dateTextWrapper } = styles;
    return (
        <View style={item}>
            <Feather
                name={weatherType[condition].icon}
                size={50}
                color={"white"}
            />
            <View style={dateTextWrapper}>
              <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
              <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
            </View>
            <Text style={temp}>{`${Math.round(min)}°/${Math.round(max)}°`}</Text>
        </View>
    );
}

export default ListItem;