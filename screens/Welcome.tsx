import React, { useEffect } from "react";
import { StyleSheet, View, SafeAreaView, Image } from "react-native";
import { SIZES, COLORS } from "../constants/theme";
import { hotel_It } from "../constants/image";

function Welcome({ navigation }: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Auth");
    }, 5000);
  }, []);
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <Image source={hotel_It} resizeMethod="scale" resizeMode="contain" />
    </SafeAreaView>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.green,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  content: {
    fontFamily: "JarkataSana_Bold",
  },
});
