import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const screen = Dimensions.get("screen");
export default function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  console.log(screen);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.login}>Log In</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          autoCorrect={false}
          style={styles.textInput}
          placeholder="Username"
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("Home", { username: username })}
        >
          <Text style={styles.loginBtnText}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signUp}
          onPress={() => navigation.navigate("Sign Up")}
        >
          <Text>Sign Up</Text>
        </TouchableOpacity>
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
    width: screen.width,
  },
  textInput: {
    backgroundColor: "#E8E8E8",
    width: 260,
    height: 44,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
    marginTop: -120,
  },
  login: {
    fontSize: 30,
  },

  signUp: {
    marginTop: 20,
  },
  loginBtn: {
    backgroundColor: "#56CCF2",
    alignItems: "center",
    paddingHorizontal: 150,
    paddingVertical: 20,
    borderRadius: 50,
    marginTop: 50,
  },
  loginBtnText: {
    color: "white",
    fontSize: 20,
  },
  form: {
    width: screen.width,
    alignItems: "center",
  },
});
