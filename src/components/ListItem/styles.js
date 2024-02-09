import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'indianred'
    },
    temp: {
        color: 'white',
        fontSize: 20
    },
    dateTextWrapper: {
        flexDirection: 'column'
    },
    date: {
        color: 'white',
        fontSize: 15
    }
});

export default styles;