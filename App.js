import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";

import Weather from "./screens/Weather";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e5f8ff" }}>
      <StatusBar style="light" backgroundColor="#e5f8ff" />
      <View style={styles.container}>
        <Weather />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
});
