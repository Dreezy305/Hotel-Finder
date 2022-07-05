import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { SIZES } from "../constants/theme";

function Welcome() {
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <Text style={{ ...styles.content }}>Welcome</Text>
    </SafeAreaView>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
  },
  content: {
    fontFamily: "JarkataSana_Bold",
  },
});
