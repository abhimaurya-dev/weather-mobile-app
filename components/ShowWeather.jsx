import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ShowWeather = ({ weatherInfo }) => {
  const weatherIconUrl = `../assets/weather/1.png`;
  // console.log(weatherInfo);
  return (
    <View style={styles.container}>
      <View>
        {/* correct image */}
        <View style={styles.data}>
          <Image source={require(weatherIconUrl)} style={styles.img} />
          <Text style={styles.weatherText}>{weatherInfo.value}</Text>
        </View>
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
  img: {
    height: 90,
    width: 90,
  },
  data: {
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  weatherText: {
    fontSize: 32,
    fontWeight: 300,
  },
});
