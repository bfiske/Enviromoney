import React, { useState } from "react";
<<<<<<< Updated upstream
import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";

=======
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const screen = Dimensions.get("screen");
>>>>>>> Stashed changes
export default function SignUp({ navigation }) {
  const [username, setUsername] = useState("");
  return (
    <View style={styles.container}>
<<<<<<< Updated upstream
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
          onPress={() => navigation.navigate("CompTest")}
        />
      </View>
=======
      <View style={styles.header}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </View>
      {formErrors.length > 0 &&
        formErrors.map((err) => {
          <Text>{err}</Text>;
        })}
      {stage === 0 && (
        <View styles={styles.form}>
          <TextInput
            style={styles.textInput}
            placeholder="username"
            onChangeText={(text) => setUsername(text)}
          />

          <TextInput
            style={styles.textInput}
            placeholder="email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            placeholder="password"
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="phoneNumber"
            onChangeText={(text) => setPhoneNumber(text)}
          />
          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.nextText}>Next</Text>
          </TouchableOpacity>
        </View>
      )}
      {stage === 1 && (
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="bankAccoutNo"
            onChangeText={(text) => setBankAccountNo(text)}
          />

          <TouchableOpacity
            style={styles.nextBtn}
            onPress={() => navigation.navigate("Home", { username: username })}
          >
            <Text style={styles.nextText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      )}
>>>>>>> Stashed changes
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
