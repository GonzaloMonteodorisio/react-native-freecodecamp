import React from "react";
import { View, Text } from "react-native";

import styles from "./styles";

const ourChild = (props) => {
    const { message } = props;

    return (
        <View style={styles.container}>
            <Text>{message}</Text>
        </View>
    );
} 

export default ourChild;