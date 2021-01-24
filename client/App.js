import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { enableScreens } from "react-native-screens";
import CompTest from "./Components/CompTest";
import Analytics from "./Screens/Analytics";
import CharitySearch from "./Screens/CharitySearch";
import Home from "./Screens/Home";
import IndividualCharity from "./Screens/IndividualCharity";
import Login from "./Screens/Login";
import Profile from "./Screens/Profile";
import SignUp from "./Screens/SignUp";

enableScreens();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CompTest"
          component={CompTest}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="IndividualCharity" component={IndividualCharity} />
        <Stack.Screen name="Organizations" component={CharitySearch} />
        <Stack.Screen name="Analytics" component={Analytics} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
