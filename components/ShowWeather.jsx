import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ShowWeather = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.weatherCondition}>ShowWeather</Text>
      <View>
        <Image source={require("../assets/weather.png")} style={styles.img} />
        <View>
          <Text>wind speed</Text>
          <Text>wind direction</Text>
        </View>
      </View>
    </View>
  );
};

export default ShowWeather;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginLeft: 18,
    marginRight: 22,
    borderWidth: 2,
    marginTop: 30,
    padding: 12,
    backgroundColor: "#fbfcf8",
    borderRadius: 12,
  },
  weatherCondition: {
    fontSize: 24,
    marginLeft: 6,
  },
  img: {
    height: 90,
    width: 90,
  },
});
