import { SafeAreaView } from "react-native";
import React from 'react'
import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";


export default function IndividualCharity( props ) {
    const image = props.route.params.charity.image
    const char = props.route.params.charity.charity
    const link = props.route.params.charity.link
    console.log(image)
    return (
    <SafeAreaView>
        {/* <Image>
            source = {require(image)}
        </Image> */}
        <Text>Welcome to {char}</Text>
        {/* <Button
            title="Click here for more information!"
            onPress = {window.location.replace(link)}
        /> */}
        
    </SafeAreaView>
    )
}