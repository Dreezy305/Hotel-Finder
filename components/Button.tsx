import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FontWeights, TextAlignments } from "../constants/theme";

type buttonProps = {
  width: string | any;
};

function Button({ width }: buttonProps) {
  return (
    <View style={{ width: width }}>
      <TouchableOpacity
        style={styles.signInButton}
        // onPress={() => {
        //   navigation.replace("HomeScreen");
        // }}
      >
        <Text style={{ ...styles.buttonText }}>SIGN IN</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  signInButton: {
    textAlign: TextAlignments.text_center,
    backgroundColor: COLORS.green,
    color: COLORS.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginVertical: 25,
    height: 60,
  },
  buttonText: {
    padding: 20,
    color: COLORS.white,
    fontFamily: "Avenir_Book",
    fontWeight: FontWeights.fw600,
    fontSize: 16,
    lineHeight: 19,
  },
});
