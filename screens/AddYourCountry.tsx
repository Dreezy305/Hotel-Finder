import React from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";

function AddYourCountry() {
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View style={{ ...styles.country }}>
        <Text>Add Your Country</Text>
      </View>
    </SafeAreaView>
  );
}

export default AddYourCountry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  country: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
