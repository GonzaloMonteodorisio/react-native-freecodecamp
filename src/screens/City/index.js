import React from "react";
import { 
    SafeAreaView,
    Text,
    ImageBackground,
    View,
} from "react-native";
import { Feather } from '@expo/vector-icons'

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
} = styles;

const City = () => {
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                source={require('../../../assets/city-sunrise-background.jpg')}
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>Paris</Text>
                <Text style={[countryName, cityText]}>France</Text>
                <View style={populationWrapper}>
                    <Feather 
                        name="user"
                        size={50}
                        color="red"
                    />
                    <Text style={populationText}>8000</Text>
                </View>
                <View style={riseSetWrapper}>
                    <Feather 
                        name="sunrise"
                        size={50}
                        color="white"
                    />
                    <Text style={riseSetText}>10:46:58am</Text>                    
                    <Feather 
                        name="sunset"
                        size={50}
                        color="white"
                    />
                    <Text style={riseSetText}>17:28:15pm</Text>                    
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default City;