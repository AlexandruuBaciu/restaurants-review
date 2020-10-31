import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


const LogInComponent = () => {
  return (
    <View style={styles.login}>
      <TextInput
        placeholder="Username"
        placeholderTextColor="#eee6ff"
        style={styles.input}
      ></TextInput>
      <TextInput
        placeholder="Password"
        placeholderTextColor="#eee6ff"
        secureTextEntry={true}
        style={styles.input}
      ></TextInput>
      <TouchableOpacity style={styles.button} color="#8d8eba">
        <Text style={styles.text}>Log in</Text>
      </TouchableOpacity>

      <TextInput style={styles.simpleText}>OR</TextInput>
      <TextInput style={styles.link}>Go to sign-up</TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    marginTop: "40%",
    alignItems: "center",
  },

  input: {
    width: "80%",
    color: "#eee6ff",
    textDecorationLine: "none",
    borderBottomColor: "#8d8eba",
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingLeft: 4,
  },

  button: {
    width: 150,
    backgroundColor: "#8d8eba",
    padding: 8,
    alignItems: "center",
  },

  text: {
    color: "#eee6ff",
    fontWeight: "bold",
  },

  simpleText: {
    color: "#eee6ff",
    fontWeight: "bold",
    marginTop: 30,
  },

  link: {
    color: "#eee6ff",
    textDecorationLine: "underline",
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default LogInComponent;
