import React from "react";
import { View, Text, Button } from "react-native";

export default function Home(props) {
  return (
    <View>
      <Text>Welcome, {props.route.params.username}</Text>
      <Button
        onPress = {() => props.navigation.navigate("Charities")}
        title = "Go to Charities"
      />
    </View>
  );
}
