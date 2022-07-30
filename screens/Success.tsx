import React from "react";
import { Text, SafeAreaView, StyleSheet, View, Image } from "react-native";
import { succes } from "../constants/image";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

function Success() {
  const navigation: any = useNavigation();

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View style={{ ...styles.sucess }}>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingBottom: 30,
          }}
        >
          <Image source={succes} resizeMethod="scale" resizeMode="contain" />
          <Text
            style={{
              fontFamily: "Poppins_Medium",
              fontWeight: "600",
              fontSize: 16,
              lineHeight: 24,
            }}
          >
            Account created successfuly
          </Text>
        </View>

        <Button
          label="Continue to home"
          width={"80%"}
          position="absolute"
          top={"100%"}
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  sucess: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Raleway_Bold",
  },
});

export default Success;
