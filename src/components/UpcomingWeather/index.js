import React from "react";
import { SafeAreaView, Text, FlatList, View, Image, ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons';

import { DATA } from "./weatherData";

import styles from "./styles";

const Item = (props) => {
    const { dt_txt, min, max, condition } = props;
    return (
        <View style={styles.item}>
            <Feather
                name="sun"
                size={50}
                color={"white"}
            />
            <Text style={styles.date}>{dt_txt}</Text>
            <Text style={styles.temp}>{min}</Text>
            <Text style={styles.temp}>{max}</Text>
        </View>
    );
}

const renderItem = ({ item }) => (
    <Item
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
    />
);

const UpcomingWeather = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground 
                style={styles.image}
                source={require('../../../assets/thunder.jpg')}
            >
                <Text>Upcoming Weather</Text>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

export default UpcomingWeather;