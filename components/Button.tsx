import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FontWeights, TextAlignments } from "../constants/theme";

type buttonProps = {
  width?: any;
  label?: string;
  loading?: boolean;
  onPress?: () => void;
  marginTop?: any;
  position?: any;
  bottom?: any;
  top?: any;
};

function Button({
  width,
  label,
  onPress,
  marginTop,
  position,
  bottom,
  top,
}: buttonProps) {
  return (
    <TouchableOpacity
      style={{
        ...styles.signInButton,
        width: width,
        marginTop: marginTop,
        position: position,
        bottom: bottom,
        top: top,
      }}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
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
    borderRadius: 30,
    marginVertical: 25,
    height: 60,
  },
  buttonText: {
    color: COLORS.white,
    fontFamily: "Poppins_Medium",
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 24,
    fontStyle: "normal",
    textTransform: "uppercase",
  },
});
