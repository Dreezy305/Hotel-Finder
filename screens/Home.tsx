import React from "react";
import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";

function Home() {
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View>Home screen</View>
    </SafeAreaView>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
