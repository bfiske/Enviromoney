import { SafeAreaView } from "react-native";
import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
  Linking,
} from "react-native";
import NewImage from "../Components/NewImage";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function IndividualCharity(props) {
  const image = props.route.params.charity.image;
  const char = props.route.params.charity.charity;
  const link = props.route.params.charity.link;
  console.log(link);
  console.log(image);
  return (
    <SafeAreaView>
      <View>
        <NewImage imageName={image} />
        <Text>Welcome to {char}</Text>
        {/* <TouchableOpacity>
          <Text>Click here for more information! {link}</Text>
        </TouchableOpacity> */}
        <Button
          title="Click here for more information!"
          onPress={() => Linking.openURL(link)}
        />
      </View>
    </SafeAreaView>
  );
}
