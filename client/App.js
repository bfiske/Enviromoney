import { StatusBar } from "expo-status-bar";
import React from "react";
import CompTest from "./Components/CompTest";
import Login from "./Screens/Login";
import { Platform, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import { createStackNavigator } from "@react-navigation/stack";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";
import SignUp from "./Screens/SignUp";
import Home from "./Screens/Home";
import IndividualCharity from "./Screens/IndividualCharity"
import MyCharity from "./Screens/MyCharity";
import CharitySearch from "./Screens/CharitySearch"

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="CompTest" component={CompTest} />
        <Stack.Screen name="Charities" component={Charities} />
        <Stack.Screen name="IndividualCharity" component={IndividualCharity} />
        <Stack.Screen name="CharitySearch" component={CharitySearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
