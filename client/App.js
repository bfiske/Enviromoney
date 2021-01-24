<<<<<<< Updated upstream
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CompTest from './CompTest';

export default function App() {
  return (
    CompTest()
  )
}
=======
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
import Charities from "./Screens/Charities";
import CharitySearch from "./Screens/CharitySearch"

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CompTest" component={CompTest} />
        <Stack.Screen name="Charities" component={Charities} />
        <Stack.Screen name="IndividualCharity" component={IndividualCharity} />
        <Stack.Screen name="CharitySearch" component={CharitySearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
>>>>>>> Stashed changes
