import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import Button from "../components/Button";
import { COLORS } from "../constants/theme";
import SocialMedia from "../components/SocialMedia";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <ScrollView style={{ ...styles.container }}>
      <View
        style={{
          ...styles.labelInputContainer,
          display: "flex",
          flexDirection: "column",
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins_Bold",
            fontSize: 24,
            lineHeight: 32,
            fontWeight: "600",
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            fontFamily: "Poppins_Bold",
            fontSize: 14,
            lineHeight: 18,
            fontWeight: "600",
            paddingTop: 20,
          }}
        >
          Sign in with your account
        </Text>
      </View>
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
      <View style={{ ...styles.labelInputContainer, position: "relative" }}>
        <Text style={{ ...styles.label }}>Password</Text>
        <TextInput
          placeholder=""
          keyboardType="name-phone-pad"
          value={password}
          onChangeText={(password) => setPassword(password)}
          style={{ ...styles.input }}
        />
        <Text
          style={{
            ...styles.label,
            color: COLORS.green,
            position: "absolute",
            right: 50,
            bottom: 10,
          }}
          onPress={() => console.log("show")}
        >
          show
        </Text>
      </View>
      <View style={{ ...styles.labelInputContainer }}>
        <Button label={"SIGN IN"} onPress={() => console.log("press")} />
        <Text style={{ ...styles.forgotPassword }}>
          <Text>Forgot your password?</Text>
          <Text style={{ color: COLORS.green }}>Reset here</Text>
        </Text>
      </View>
      <SocialMedia />
    </ScrollView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  labelInputContainer: {
    paddingTop: 15,
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
  forgotPassword: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: "Poppins_Regular",
    fontSize: 10,
    lineHeight: 15,
    paddingBottom: 8,
  },
  altSignIn: {
    fontFamily: "Poppins_Regular",
    color: "#000000",
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.75,
  },
  socialMedaia: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: "auto",
  },
});
