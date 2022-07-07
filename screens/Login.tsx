import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import Button from "../components/Button";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <View style={{ ...styles.container }}>
      <View style={{ ...styles.labelInputContainer }}>
        <Text style={{ ...styles.label }}>Username</Text>
        <TextInput
          placeholder=""
          keyboardType="name-phone-pad"
          value={username}
          onChangeText={(username) => setUsername(username)}
          style={{ ...styles.input }}
        />
      </View>
      <View style={{ ...styles.labelInputContainer }}>
        <Text style={{ ...styles.label }}>Password</Text>
        <TextInput
          placeholder=""
          keyboardType="name-phone-pad"
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={{ ...styles.input }}
        />
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  labelInputContainer: {
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  label: {
    fontFamily: "Poppins_Regular",
    fontSize: 15,
    lineHeight: 21,
    color: "#19235B",
    fontWeight: "400",
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#D9DFEB",
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    width: "100%",
  },
});
