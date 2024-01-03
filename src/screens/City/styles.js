import { 
    StyleSheet, 
    StatusBar,
} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        // paddingTop: Platform.OS === 'android' ? 35 : 0, // Ajusta según sea necesario
        // paddingBottom: Platform.OS === 'android' ? 25 : 0, // Ajusta según sea necesario
        borderColor: 'blue',
        borderWidth: 1
    },
    imageLayout: {
        flex: 1,
    },
    cityName: {
        fontSize: 40,
    },
    countryName: {
        fontSize: 30,
    },
    cityText: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'white'       
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30,
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    riseSetWrapper: {
        justifyContent: 'space-around',
        marginTop: 30,
    },
    riseSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});

export default styles;