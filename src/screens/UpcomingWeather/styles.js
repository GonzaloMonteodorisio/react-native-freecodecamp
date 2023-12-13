import { 
    StyleSheet, 
    StatusBar 
} from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }
});

export default styles;