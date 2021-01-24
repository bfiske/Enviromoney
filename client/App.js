import { StatusBar } from "expo-status-bar";
import React from "react";
import CompTest from "./components/CompTest";
import Login from "./screens/Login";
import { Platform, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";
import Charities from "./screens/Charities";

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Charities" component={Charities} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
