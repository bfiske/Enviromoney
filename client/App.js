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
<<<<<<< Updated upstream
import IndividualCharity from "./Screens/IndividualCharity"
import Charities from "./Screens/Charities";
import CharitySearch from "./Screens/CharitySearch"
=======
import IndividualCharity from "./Screens/IndividualCharity";
import CharitySearch from "./Screens/CharitySearch";
>>>>>>> Stashed changes

enableScreens();

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
<<<<<<< Updated upstream
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CompTest" component={CompTest} />
        <Stack.Screen name="Charities" component={Charities} />
        <Stack.Screen name="IndividualCharity" component={IndividualCharity} />
        <Stack.Screen name="CharitySearch" component={CharitySearch} />
=======
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Sign Up" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="CompTest" component={CompTest} options={{ headerShown: false }}/>
        <Stack.Screen name="IndividualCharity" component={IndividualCharity} options={{ headerShown: false }}/>
        <Stack.Screen name="Organization Search" component={CharitySearch} />
>>>>>>> Stashed changes
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
