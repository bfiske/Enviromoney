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
import { UserProvider } from "./Contexts/UserContext";
import Badges from "./Screens/Badges";
import { Button } from "react-native"

enableScreens();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <UserProvider>
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
          <Stack.Screen
            name="Organization"
            component={IndividualCharity}
            options={{
              headerRight: () => (
                  <Button
                  onPress={() => alert('Clicked !!')}
                  title="menu"
                  color="#000"
                  />
              ),
              }}
          />
          <Stack.Screen name="Organizations" component={CharitySearch}  options={{ headerShown: false }}/>

          <Stack.Screen name="Analytics" component={Analytics}  options={{ headerShown: false }}/>
          <Stack.Screen name="Profile" component={Profile}  options={{ headerShown: false }}/>
          <Stack.Screen name="Badges" component={Badges}  options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}
