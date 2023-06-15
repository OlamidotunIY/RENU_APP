import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

const Input = ({ type, name, placeholder }) => {
  const [credential, setCredential] = React.useState({
    email: "",
    password: "",
  });
  const handleInputChange = (text, value) => {
    setCredential({ ...credential, [text]: value });
  };
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      {type === "email" && (
        <TextInput
          placeholder={placeholder}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          value={credential.email}
          onChangeText={(text) => handleInputChange("email", text)}
        />
      )}
      {type === "password" && (
        <TextInput
          placeholder={placeholder}
          secureTextEntry
          style={styles.input}
          value={credential.password}
          onChangeText={(text) => handleInputChange("password", text)}
        />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
    container : {
        display: 'flex',
        flexDirection: 'column',
        width: 387,
        height: 69,
        gap: 10,
    },
    input : {
        width: 387,
        height: 40,
        backgroundColor: '#777777',
        paddingLeft: 10,
        borderRadius: 3,
    },
});
