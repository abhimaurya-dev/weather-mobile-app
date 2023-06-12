import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ShowWeather from "../components/ShowWeather";
import axios from "axios";
import { REACT_APP_API_KEY } from "@env";

// const API_KEY = "";
const url =
  "http://dataservice.accuweather.com/locations/v1/cities/autocomplete";

const Weather = () => {
  const [placeholder, setPlaceholder] = useState("location");
  const [location, setLocation] = useState("");
  const [locationList, setLocationList] = useState([]);
  useEffect(() => {
    if (location !== "") {
      axios
        .get(url, {
          params: {
            apikey: process.env.REACT_APP_API_KEY,
            q: location,
            language: "en-us",
          },
        })
        .then((response) => {
          let locations = new Array();
          response.data.forEach((location) => {
            locations.push({
              key: location.Key,
              localizedName: location.LocalizedName,
              country: location.Country.LocalizedName,
              administrativeArea: location.AdministrativeArea.LocalizedName,
            });
          });
          setLocationList(locations);
        })
        .catch((error) => console.log(error));
    }
    if (location === "") {
      setLocationList([]);
    }
  }, [location]);
  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={{ paddingTop: 12 }}>
          <TextInput
            style={styles.locInput}
            placeholder={placeholder}
            value={location}
            keyboardType="default"
            onFocus={() => setPlaceholder("")}
            onBlur={() => setPlaceholder("location")}
            onChangeText={(e) => setLocation(e)}
          />
          {locationList.length !== 0 && (
            <View style={styles.autoCompleteView}>
              <FlatList
                data={locationList}
                renderItem={({ item }) => {
                  return (
                    <Text style={styles.autoCompleteText}>
                      {item.localizedName +
                        "," +
                        item.country +
                        "," +
                        item.administrativeArea}
                    </Text>
                  );
                }}
                keyExtractor={(item) => item.key}
              />
            </View>
          )}
        </View>
      </View>
      <ShowWeather />
    </>
  );
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginHorizontal: 14,
    backgroundColor: "#e5f8ff",
  },
  locInput: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    padding: 14,
    fontSize: 16,
    marginLeft: 6,
    backgroundColor: "#fbfcf8",
    marginRight: 10,
  },
  autoCompleteView: {
    marginTop: -3,
    marginLeft: 6,
    marginRight: 10,
    padding: 3,
    borderTopWidth: 0,
    borderWidth: 1,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  autoCompleteText: {
    fontSize: 16,
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 1,
  },
});
