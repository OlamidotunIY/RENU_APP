import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Pressable,
} from "react-native";
import React, { useRef, useState } from "react";
import colors from "../components/colors";
import AppButton from "../components/AppButton";
import routes from "../navigators/routes";
import { AntDesign } from "@expo/vector-icons";

const Onboarding = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const width = Dimensions.get("window").width;

  const onIndicatorPress = (index) => {
    setActiveIndex(index);
    // Scroll to the selected image
    carouselRef.current.scrollToIndex({ index, animated: true });
  };

  const PrevScreen = () => {
    setActiveIndex(0);
  }

  const renderIndicator = (index) => (
    <TouchableOpacity
      style={[
        styles.indicator,
        index === activeIndex && styles.activeIndicator,
      ]}
      onPress={() => onIndicatorPress(index)}
    />
  );

  const SignupPage = () => {
    navigation.navigate(routes.SIGNUP_NAVIGATOR.SIGNUP);
  };
  const SigninPage = () => {
    navigation.navigate(routes.SIGNUP_NAVIGATOR.LOGIN);
  };
  const OnboardingData = [
    {
      Image: require("../../assets/onboarding2.jpg"),
      title: "Order Your Favorite Food",
      description: "You can order any of your favorite food",
      btn1Title: "Sign In",
      btn2Title: "Sign Up",
    },
    {
      Image: require("../../assets/onboarding1.jpg"),
      title: "Food At Your Door Step",
      description: "Get your food deliver at your door step.",
      btn1Title: "Get Started",
      btn2Title: "Sign Up",
    },
  ];

  const renderScreen = ({ item, index }) => {
    return (
      <View style={styles.container}>
        {index === 1 && (
          <Pressable style={[ styles.arrow, ]} onPress={PrevScreen}>
            <AntDesign
              // style={styles.arrow}
              name="arrowleft"
              size={34}
              color="black"
            />
          </Pressable>
        )}
        <Image style={styles.image} source={item.Image} />
        <Text style={[styles.title, { fontFamily: "Montserrat_600SemiBold" }]}>
          {item.title}
        </Text>
        <Text style={styles.description}>{item.description}</Text>
        <View style={styles.btnContainer}>
          <AppButton
            onPress={SigninPage}
            fill={true}
            title={item.btn1Title}
            outline={false}
          />
          <AppButton
            onPress={SignupPage}
            fill={false}
            title={item.btn2Title}
            outline={true}
          />
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.secondary,
      }}
    >
      <FlatList
        data={OnboardingData}
        ref={carouselRef}
        renderItem={renderScreen}
        horizontal
        pagingEnabled
        keyExtractor={(_, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => {
          setActiveIndex(Math.round(event.nativeEvent.contentOffset.x / width));
        }}
      />
      <View style={styles.indicatorContainer}>
        <View
          style={{
            backgroundColor: "rgba(56, 55, 61, 0.9)",
            padding: 4,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          {OnboardingData.map((_, index) => renderIndicator(index))}
        </View>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.secondary,
    justifyContent: "center",
    width: Dimensions.get("window").width,
  },
  image: {},
  arrow: {
    position: "absolute",
    top: 30,
    left: 40,
  },
  title: {
    fontSize: 35,
    marginTop: 80,
  },
  description: {
    marginTop: 50,
    fontSize: 15,
  },
  btnContainer: {
    marginTop: 50,
    gap: 25,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 40,
    width: "100%",
    paddingHorizontal: 10,
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#8C8998",
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: "#FBFAFF",
    borderRadius: 8,
    width: 16,
    height: 5,
  },
});
