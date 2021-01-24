import { SafeAreaView } from "react-native";
import React from 'react'
import { Text, StyleSheet, View, TextInput, Button, Alert } from "react-native";


export default function IndividualCharity( props ) {
    const images = require.context('../Images', true);

    const image = props.route.params.charity.image
    const char = props.route.params.charity.charity
    const link = props.route.params.charity.link
    console.log(image)
    return (
    <SafeAreaView>
<<<<<<< Updated upstream
        {/* <Image>
            source = {require(image)}
        </Image> */}
        <Text>Welcome to {char}</Text>
        {/* <Button
            title="Click here for more information!"
            onPress = {window.location.replace(link)}
        /> */}
        
=======
        <View>
            <NewImage source={image} key={image} />
            <Text>Welcome to {char}</Text>
            <Button
                title="Click here for more information!"
                onPress = {window.location.replace(link)}
            />
        </View>
>>>>>>> Stashed changes
    </SafeAreaView>
    )
}