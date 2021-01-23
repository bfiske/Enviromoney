import React from "react";
import { View, Text } from "react-native";

export default function Home(props) {
  return (
    <View>
      <Text>Welcome, {props.route.params.username}</Text>
    </View>
  );
}
