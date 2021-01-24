import React from "react";
import { Text } from "react-native";

export default function Profile({ navigation }, props) {
  const username = props.username;

  return <Text>{username}</Text>;
}
