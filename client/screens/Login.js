import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View>
        <TextInput
          placeholder="username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput secureTextEntry={true} placeholder="password" />
        <Button
          title="Login"
          onPress={() => navigation.navigate("Home", { username: username })}
        />
        <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
});
