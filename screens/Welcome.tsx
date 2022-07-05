import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Welcome() {
  return (
    <View style={{ ...styles.container }}>
      <Text style={{ ...styles.content }}>Welcome</Text>
    </View>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    fontFamily: "JarkataSana_Bold",
  },
});
