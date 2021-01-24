import React from "react";
import { View, Text, Button, SafeAreaView} from "react-native";

export default function Home({ navigation, route }) {
  return (
    <SafeAreaView>

      <Text>Welcome, {route.params.username}</Text>
      <Text>Amount donated today: $13</Text>
      <Button
        title="My Charity"
        onPress={() => navigation.navigate("My Charity")}

      />
    </SafeAreaView>
  );
}
