import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import { google, facebook, twitter } from "../constants/image";

function SocialMedia() {
  return (
    <ScrollView style={{ ...styles.labelInputContainer }}>
      <Text style={{ ...styles.altSignIn }}>Or sign in with</Text>
      <View style={{ ...styles.socialMedaia }}>
        <Image source={google} resizeMethod="auto" resizeMode="contain" />
        <Image
          source={facebook}
          resizeMethod="auto"
          resizeMode="contain"
          style={{ marginStart: 20, marginEnd: 20 }}
        />
        <Image source={twitter} resizeMethod="auto" resizeMode="contain" />
      </View>
    </ScrollView>
  );
}

export default SocialMedia;

const styles = StyleSheet.create({
  labelInputContainer: {
    paddingTop: 5,
    paddingHorizontal: 40,
    marginBottom: 30,
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
    justifyContent: "center",
  },
});
