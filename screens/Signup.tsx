import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import { COLORS } from "../constants/theme";
import Button from "../components/Button";
import SocialMedia from "../components/SocialMedia";

function Signup() {
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <View style={{ ...styles.container }}>
      <View style={{}}></View>
      <View style={{ ...styles.labelInputContainer }}>
        <Text style={{ ...styles.label }}>First Name</Text>
        <TextInput
          placeholder=""
          keyboardType="name-phone-pad"
          value={firstname}
          onChangeText={(username) => setFirstname(firstname)}
          style={{ ...styles.input }}
        />
      </View>
      <View style={{ ...styles.labelInputContainer }}>
        <Text style={{ ...styles.label }}>Last Name</Text>
        <TextInput
          placeholder=""
          keyboardType="name-phone-pad"
          value={lastname}
          onChangeText={(lastname) => setLastname(lastname)}
          style={{ ...styles.input }}
        />
      </View>
      <View style={{ ...styles.labelInputContainer }}>
        <Text style={{ ...styles.label }}>Email</Text>
        <TextInput
          placeholder=""
          keyboardType="name-phone-pad"
          value={email}
          onChangeText={(email) => setEmail(email)}
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
      <View style={{ ...styles.labelInputContainer, paddingTop: 1 }}>
        <Button label={"SIGN UP"} />
      </View>
      <SocialMedia />
    </View>
  );
}

export default Signup;

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
});
