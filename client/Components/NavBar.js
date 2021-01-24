import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Charities from "../Screens/CharitySearch";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (
    <View style={styles.navBar}>
      <View>
        <TouchableOpacity>
          <Text>T</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>T</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>T</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>T</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text>T</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "white",
  },
  navItem: {
    borderColor: "black",
    borderWidth: 1,
    width: 20,
    height: 60,
  },
});
