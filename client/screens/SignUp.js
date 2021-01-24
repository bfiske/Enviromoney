import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";

import { Picker } from "@react-native-picker/picker";
const screen = Dimensions.get("screen");
export default function SignUp({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [pickerState, setPickerState] = useState("charity 1");

  const [bankAccoutNo, setBankAccountNo] = useState("");
  const [stage, setStage] = useState(0);

  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = () => {
    const errors = {};
    if (!email.includes("@")) {
      errors["email"] = "Must provide a valid email";
    }
    if (!password.length < 8) {
      errors["password"] = "Password must be atleast 8 characters long";
    }

    if (errors.length > 0) {
      setFormErrors(errors);
      return;
    }

    if (stage === 0) {
      setStage(1);
    }
  };

  return (
    <View style={styles.container}>
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
  signUpText: {
    fontSize: 30,
  },

  signUp: {
    marginTop: 20,
  },
  nextBtn: {
    backgroundColor: "#56CCF2",
    alignItems: "center",
    paddingHorizontal: 150,
    paddingVertical: 20,
    borderRadius: 50,
    marginTop: 50,
  },
  nextText: {
    color: "white",
    fontSize: 20,
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    width: screen.width,
  },
});
