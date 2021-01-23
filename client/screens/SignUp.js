import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState("");
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View>
        <TextInput
          placeholder="username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput secureTextEntry={true} placeholder="password" />
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate("CompText")}
        />
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
