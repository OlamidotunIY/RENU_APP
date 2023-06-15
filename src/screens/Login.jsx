import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import AppButton from '../components/AppButton'
const Login = () => {
  const handleGoogleAuth = () => {
    console.log('Google Auth')
  }

  const handleFacebookAuth = () => {
    console.log('Facebook Auth')
  }
  return (
    <View>
      <Header
        title="Welcome Back"
        desc="Sign in to your account"
        header={true}
      />
      <View style={styles.container}>
        <Input name="Email" type="email" placeholder = 'Enter Your Email' />
        <Input name="Password" type="password" placeholder = 'Enter Your Password' />
        <Text>Forget Password</Text>
        <AppButton title = 'Login' outline={false} />
        <Pressable onPress={
          handleGoogleAuth
        }>
          <Text>Login in with</Text>
          <Text>Google</Text>
        </Pressable>
        <Pressable onPress={
          handleFacebookAuth
        }>
          <Text>Login in with</Text>
          <Text>Facebook</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: "flex",
    flexDirection: "column",
    // justifyContent: 'center',
    alignItems: "center",
    gap: 20,
  },
});
