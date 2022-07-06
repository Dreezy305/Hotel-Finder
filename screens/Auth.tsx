import React from "react";
import { View, StyleSheet, SafeAreaView, Text, Image } from "react-native";
import { hotel_green } from "../constants/image";
import { SIZES, COLORS } from "../constants/theme";

function Auth() {
  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View style={{ ...styles.imageContainer }}>
        <Image source={hotel_green} resizeMethod="scale" resizeMode="contain" />
      </View>
      <View style={{ ...styles.cardOne }}>
        <View style={{ ...styles.cardOneInner }}>
          <Text>hello</Text>
          <Text>hello</Text>
        </View>

        <View style={{ ...styles.cardTwo }}></View>
      </View>
    </SafeAreaView>
  );
}

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    backgroundColor: COLORS.white,
    paddingTop: 50,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  image: {
    marginVertical: 50,
  },
  cardOne: {
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: COLORS.green,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    overflow: "hidden",
    position: "relative",
  },
  cardOneInner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    textAlign: "center",
    position: "absolute",
    left: "30%",
  },
  cardOneInnerText: {},
  cardTwo: {
    borderTopRightRadius: 28,
    borderTopLeftRadius: 28,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: COLORS.white,
    zIndex: 100,
    height: "100%",
    width: "100%",
    paddingTop: 50,
    marginTop: 100,
    overflow: "hidden",
    position: "absolute",
  },
});
