import { StyleSheet, Text, View } from "react-native";
import { Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require("../assets/weather.png")} />
      {/* <Text style={styles.header}>Weather</Text> */}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#e5f8ff",
    marginTop: 16,
    marginLeft: 8,
  },
  header: {
    fontSize: 32,
    color: "#54416d",
  },
  img: {
    resizeMode: "contain",
    height: 60,
    width: 70,
  },
});
