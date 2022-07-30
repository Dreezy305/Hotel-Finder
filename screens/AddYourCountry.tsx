import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  ActivityIndicator,
} from "react-native";
import SelectList from "react-native-dropdown-select-list";
import { COLORS } from "../constants/theme";
import { Countries } from "../data/country";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";

function AddYourCountry() {
  const navigation: any = useNavigation();
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Jammu & Kashmir" },
    { key: "2", value: "Gujrat" },
    { key: "3", value: "Maharashtra" },
    { key: "4", value: "Goa" },
  ];

  return (
    <SafeAreaView style={{ ...styles.container }}>
      <View style={{ ...styles.country }}>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 30,
            textAlign: "center",
            paddingBottom: 20,
            fontFamily: "Raleway_Bold",
            fontWeight: "700",
          }}
        >
          Complete Your Set Up!
        </Text>
        <Text
          style={{
            textAlign: "center",
            width: "90%",
            fontFamily: "Poppins_Regular",
            fontSize: 14,
            lineHeight: 18,
            fontWeight: "400",
            paddingBottom: 20,
          }}
        >
          For the purpose of proper default location search, you are needed to
          input your country of origin.
        </Text>

        <View
          style={{
            marginTop: 30,
            margin: "auto",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_Regular",
              color: COLORS.grey01,
              fontSize: 14,
              lineHeight: 17,
              paddingBottom: 5,
            }}
          >
            Country
          </Text>
          <SelectList
            setSelected={setSelected}
            data={data}
            boxStyles={{ width: 350, fontFamily: "Poppins_Regular" }}
            placeholder={"Select Country"}
            dropdownTextStyles={{ fontFamily: "Poppins_Regular" }}
            dropdownStyles={{ fontFamily: "Poppins_Regular" }}
            inputStyles={{ fontFamily: "Poppins_Regular" }}
          />
        </View>

        <Button
          label={"Complete"}
          onPress={() => navigation.navigate("Success")}
          width="80%"
          marginTop={300}
        />
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
    fontFamily: "Raleway_Bold",
  },
});
