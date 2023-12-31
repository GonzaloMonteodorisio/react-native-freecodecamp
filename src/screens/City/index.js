import React from "react";
import { 
    SafeAreaView,
    Text,
    ImageBackground,
    View,
} from "react-native";
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

const City = () => {
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
                source={require('../../../assets/city-sunrise-background.jpg')}
                style={imageLayout}
            >
                <Text style={[cityName, cityText]}>Paris</Text>
                <Text style={[countryName, cityText]}>France</Text>
                <View style={[populationWrapper, rowLayout]}>
                    <InconText
                        iconName="user"
                        iconColor="red"
                        bodyText="8000"
                        bodyTextStyles={populationText}
                    />
                </View>
                <View style={[riseSetWrapper, rowLayout]}>
                    <InconText
                        iconName="sunrise"
                        iconColor="white"
                        bodyText="10:46:58am"
                        bodyTextStyles={riseSetText}
                    />
                    <InconText
                        iconName="sunset"
                        iconColor="white"
                        bodyText="17:28:15pm"
                        bodyTextStyles={riseSetText}
                    />                                       
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default City;