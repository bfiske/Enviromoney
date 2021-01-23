import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";
export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View>
        <TextInput placeholder="username" />
        <TextInput secureTextEntry={true} placeholder="password" />
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
