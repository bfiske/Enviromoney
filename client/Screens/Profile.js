import React, { useContext } from "react";
import { Text } from "react-native";
import { UserContext } from "../Contexts/UserContext";

export default function Profile({ navigation }) {
  const userCtx = useContext(UserContext);

  return <Text>{userCtx.user}</Text>;
}
