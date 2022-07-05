import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { SIZES, COLORS } from "../constants/theme";
// import HotelIt from "../assets/icons/HotelIt.svg";

function Welcome() {
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View style={{ ...styles.container }}></View>
    </SafeAreaView>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.green,
  },
  content: {
    fontFamily: "JarkataSana_Bold",
  },
});
