import { 
    StyleSheet, 
    StatusBar 
} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // marginTop: StatusBar.currentHeight || 0,
        //backgroundColor: 'royalblue',
        paddingTop: Platform.OS === 'android' ? 35 : 0, // Ajusta según sea necesario
        // paddingBottom: Platform.OS === 'android' ? 25 : 0, // Ajusta según sea necesario
        borderColor: 'blue',
        borderWidth: 1
    },
    image: {
        flex: 1
    }
});

export default styles;