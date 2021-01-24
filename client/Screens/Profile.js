import React, { useContext } from "react";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";
import { UserContext } from "../Contexts/UserContext";
import NavBar from "../Components/NavBar";

const screenWidth = Dimensions.get("window").width;
export default function Profile({ navigation }) {
  const userCtx = useContext(UserContext);

  return (
    <>
      <View style={styles.blueBg}>
        <Text style={styles.profileTxt}>Your Profile</Text>
      </View>
      <View style="userHeader">
        <Text style={styles.username}>{userCtx.user}</Text>
      </View>

      <NavBar navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  blueBg: {
    position: "absolute",
    height: 245,
    left: 0,
    right: -1,
    top: 0,
    backgroundColor: "#56CCF2",
  },
  username: {
    position: "absolute",
    width: 357,
    height: 125,
    left: screenWidth / 2 - 50,
    top: 289,
  },
  userHeader: {
    flex: 1,
  },
  profileTxt: {
    position: "absolute",
    width: 94,
    height: 36,
    left: screenWidth / 2 - 50,
    top: 20,
  },
});
