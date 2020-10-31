import React from "react";
import { StatusBar } from "expo-status-bar";

import { StyleSheet, View } from "react-native";

import LogInComponent from "./components/login-component/LogInComponent";
import HeaderComponent from "./components/header-component/HeaderComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HeaderComponent />
      <LogInComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262030",
  },
});
