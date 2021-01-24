import React from "react";
import { Button, Linking, ScrollView, Text, View } from "react-native";
import NavBar from "../Components/NavBar";
import NewImage from "../Components/NewImage";

export default function IndividualCharity( props ) {
    const images = require.context('../Images', true);

    const image = props.route.params.charity.image
    const char = props.route.params.charity.charity
    const link = props.route.params.charity.link
    console.log(image)
    return (
    <SafeAreaView>
        <View>
            <NewImage source={image} key={image} />
            <Text>Welcome to {char}</Text>
            <Button
                title="Click here for more information!"
                onPress = {window.location.replace(link)}
            />
        </View>
    </SafeAreaView>
    )
}

export default function IndividualCharity(props, { navigation }) {
  const image = props.route.params.charity.image;
  const char = props.route.params.charity.charity;
  const link = props.route.params.charity.link;
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
