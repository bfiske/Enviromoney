import React from "react";
import { Button, Linking, ScrollView, Text, View } from "react-native";
import NavBar from "../Components/NavBar";
import NewImage from "../Components/NewImage";

export default function IndividualCharity(props, { navigation }) {
  const image = props.route.params.charity.image;
  const char = props.route.params.charity.charity;
  const link = props.route.params.charity.link;
  console.log(link);
  console.log(image);
  return (
    <>
      <ScrollView>
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
      </ScrollView>
      <NavBar navigation={navigation} />
    </>
  );
}
