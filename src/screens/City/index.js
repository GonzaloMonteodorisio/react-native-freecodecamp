import React from "react";
import { 
    SafeAreaView,
    Text,
    ImageBackground,
    View,
} from "react-native";
import moment from "moment";
import InconText from "../../components/IconText";

import styles from "./styles";

const { 
    container, 
    imageLayout,
    cityName,
    countryName, 
    cityText,
    populationText,
    populationWrapper,
    riseSetWrapper,
    riseSetText,
    rowLayout,
} = styles;

const City = ({ weatherData }) => {

    const { 
        name,
        country,
        population,
        sunrise,
        sunset,
    } = weatherData;

    console.info(sunrise);
    console.info(sunset);

    const threeHoursInSeconds = 3 * 60 * 60;

    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                source={require('../../../assets/monumento-soleado.jpg')}
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>{name}</Text>
                <Text style={[countryName, cityText]}>{country}</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <InconText
                        iconName="user"
                        iconColor="red"
                        bodyText={`Population: ${population}`}
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <InconText
                        iconName="sunrise"
                        iconColor="white"
                        bodyText={moment((sunrise - threeHoursInSeconds) * 1000).format('h:mm:ss a')}
                        bodyTextStyles={riseSetText}
                    />
                    <InconText
                        iconName="sunset"
                        iconColor="white"
                        bodyText={moment((sunset - threeHoursInSeconds) * 1000).format('h:mm:ss a')}
                        bodyTextStyles={riseSetText}
                    />                                       
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default City;