import React from "react";
import { StyleSheet, Text, View } from "react-native";

const HeaderComponent = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Restaurants Reviewer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#372e45",
    alignItems: "center",
  },

  headerText: {
    color: "#eee6ff",
    fontWeight: "bold",
    fontSize: 20,
    paddingTop: 25,
  },
});

export default HeaderComponent;
