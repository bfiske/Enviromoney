import React from "react";
import { View, Text, Button } from "react-native";

import { View, Text } from "react-native";


export default function Home({ navigation, route }) {
  return (
    <View>

      <Text>Welcome, {route.params.username}</Text>
      <Text>Amount donated today: $13</Text>
      <Button
        title="Charities"
        onPress={() => navigation.navigate("Charities")}

      />
    </View>
  );
}
