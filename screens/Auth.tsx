import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { hotel_green } from "../constants/image";
import { SIZES, COLORS } from "../constants/theme";
// components
import Signup from "./Signup";
import Login from "./Login";

function Auth() {
  const [active, setActive] = useState("SIGN_UP");

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View style={{ ...styles.imageContainer }}>
        <Image source={hotel_green} resizeMethod="scale" resizeMode="contain" />
      </View>
      <View style={{ ...styles.cardOne }}>
        <View style={{ ...styles.cardOneInner }}>
          <TouchableOpacity style={{ position: "relative" }}>
            <Text
              style={{
                ...styles.cardOneInnerText,
                position: "absolute",
                left: 70,
                color: `${
                  active === "SIGN_IN" ? "#ffffff" : "rgba(255, 255, 255, 0.6)"
                }`,
              }}
              onPress={() => setActive("SIGN_IN")}
            >
              SIGN IN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ position: "relative" }}>
            <Text
              style={{
                ...styles.cardOneInnerText,
                position: "absolute",
                left: 250,
                color: `${
                  active === "SIGN_UP" ? "#ffffff" : "rgba(255, 255, 255, 0.6)"
                }`,
              }}
              onPress={() => setActive("SIGN_UP")}
            >
              SIGN UP
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ ...styles.cardTwo }}>
          {active === "SIGN_UP" ? <Signup /> : <Login />}
        </ScrollView>
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
    justifyContent: "space-between",
    textAlign: "center",
    position: "absolute",
    // left: "30%",
  },
  cardOneInnerText: {
    fontFamily: "Poppins_Medium",
    textTransform: "uppercase",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 18,
    paddingTop: 40,
  },
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
    marginTop: 90,
    overflow: "hidden",
    position: "absolute",
  },
});
