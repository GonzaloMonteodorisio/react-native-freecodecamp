import React from "react";
import { View, Text, Platform, StyleSheet, SafeAreaView, StatusBar } from "react-native";


const App = () => {

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Text>Current Weather</Text>
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8 </Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodyWrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'pink',
  },
  container: {
  flex:1,
    alignItems: 'center',
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
    alignItems: 'flex-start'
  },
  description: {
    fontSize: 48
  }, 
  message: {
    fontSize: 30
  }
});

export default App;
