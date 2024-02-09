import React from "react";
import { 
    SafeAreaView, 
    FlatList, 
    ImageBackground 
} from "react-native";

import ListItem from "../../components/ListItem";

// import { DATA } from "./weatherData";

import styles from "./styles";

const renderItem = ({ item }) => (
    <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
    />
);

const UpcomingWeather = ({ weatherData }) => {

    const { container, image } = styles;
    
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                style={image}
                source={require('../../../assets/thunder.jpg')}
            >
                <FlatList
                    data={weatherData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.dt_txt}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

export default UpcomingWeather;