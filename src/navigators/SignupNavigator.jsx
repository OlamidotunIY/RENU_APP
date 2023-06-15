import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import routes from "./routes";
import Onboarding from "../screens/Onboarding";
import Signup from "../screens/Signup";

const SignupNavigator = () => {
  const SignupStack = createNativeStackNavigator();
  return (
    <SignupStack.Navigator screenOptions={{ headerShown: false }}>
      <SignupStack.Screen
        name={routes.SIGNUP_NAVIGATOR.ONBOARDING}
        component={Onboarding}
      />
      <SignupStack.Screen
        name={routes.SIGNUP_NAVIGATOR.LOGIN}
        component={Login}
      />
      <SignupStack.Screen
        name={routes.SIGNUP_NAVIGATOR.SIGNUP}
        component={Signup}
      />
    </SignupStack.Navigator>
  );
};

export default SignupNavigator;
