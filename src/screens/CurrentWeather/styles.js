import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Platform.OS === 'android' ? 35 : 0, // Ajusta según sea necesario
        paddingBottom: Platform.OS === 'android' ? 25 : 0, // Ajusta según sea necesario
        borderColor: 'blue',
        borderWidth: 1
    },
    temp: {
        color: 'black',
        fontSize: 48
    },
    feels: {
        fontSize: 30,
        color: 'black'
    },
    highLowWrapper: {
        flexDirection: 'row'
    },
    highLow: {
        color: 'black',
        fontSize: 20
    },
    bodyWrapper: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingLeft: 25,
        marginBottom: 40
    },
    description: {
        fontSize: 48
    },
    message: {
        fontSize: 30
    }
});

export default styles;