import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";

function Signup() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <View style={{ ...styles.container }}>
      <View style={{}}></View>
      <View style={{ ...styles.labelInputContainer }}>
        <Text style={{ ...styles.label }}>First Name</Text>
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
          value={username}
          onChangeText={(username) => setUsername(username)}
          style={{ ...styles.input }}
        />
      </View>
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
  },
  labelInputContainer: {
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  label: {
    // fontFamily: "Avenir_Book",
    fontSize: 19,
    lineHeight: 19,
    // color: COLORS.purple,
  },
  input: {
    height: 50,
    borderWidth: 2,
    // borderColor: COLORS.offPurple,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderTopWidth: 0,
    width: "100%",
  },
});
