import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        height: 200,
        width: 200,
        backgroundColor: 'red'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    date: {
        color: 'white',
        fontSize: 15
    },
    image: {
        flex: 1
    }
});

export default styles;