import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button } from "react-native";

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [bankAccoutNo, setBankAccountNo] = useState("");
  const [stage, setStage] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Sign Up</Text>
      {stage === 0 && (
        <View>
          <TextInput
            placeholder="username"
            onChangeText={(text) => setUsername(text)}
          />

          <TextInput
            placeholder="email"
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            secureTextEntry={true}
            placeholder="password"
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            placeholder="phoneNumber"
            onChangeText={(text) => setPhoneNumber(text)}
          />

          <Button title="Next" onPress={() => setStage(1)} />
        </View>
      )}
      {stage === 1 && (
        <View>
          <TextInput
            placeholder="bankAccoutNo"
            onChangeText={(text) => setBankAccountNo(text)}
          />

          <Button
            title="Sign Up"
            onPress={() => {
              navigation.navigate("Home", { username: username });
            }}
          />
        </View>
      )}
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
