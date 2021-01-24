import React from "react";
import { StyleSheet, Button, Linking, ScrollView, Text, View, SafeAreaView, Image } from "react-native";
import NavBar from "../Components/NavBar";
import NewImage from "../Components/NewImage";

export default function IndividualCharity( props ) {
    const image = props.route.params.charity.image
    const char = props.route.params.charity.charity
    const link = props.route.params.charity.link
    return (
    <SafeAreaView>
        <View>
            <Image source={image} style={styles.image} />
            <Text>Welcome to {char}</Text> 
            <Button
                title="Click here for more information!"
            />
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  image : {
    height: 100,
    width : 100,
    marginRight: 20,
    resizeMode:"cover",
  }
})
