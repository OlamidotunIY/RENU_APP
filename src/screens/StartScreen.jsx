import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component, useEffect } from "react";
import colors from "../components/colors";
import routes from "../navigators/routes";
import { fontMappings } from '../../assets/fonts';

export default function StartScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(routes.AUTH_NAVIGATOR.SIGNUPNAVIGATOR);
    }, 2000); // Navigate to the next screen after 2 seconds
  }, []);
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/Group-1.jpg")}
        alt="image"
      />
      <Text style={styles.text}>RENU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 35,
    marginTop: 10,
    color: colors.primary,
    // fontFamily: fontMappings["Inter-Semibold"],
  },
  image: {
    width: 187,
    height: 170,
  },
});
