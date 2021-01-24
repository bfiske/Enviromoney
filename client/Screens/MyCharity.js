import React, { useState } from "react";

import { Text, StyleSheet, View, TextInput, Button, ScrollView, FlatList, StatusBar, Image, TouchableOpacity, SafeAreaView, ImageStore} from "react-native";
import { SearchBar, Card } from "react-native-elements"
const dummyData = [{
    'id' : '1',
    'charity' : 'World Wildlife Fund',
    'image' : './images/tree.jpeg',
    'link' : 'www.google.com',
    'descr': 'The mission of World Wildlife Fund is to conserve nature and reduce the most pressing threats to the diversity of life on Earth.'
},
{
    'id' : '2',
    'charity' : 'The Great Barrier Reef Foundation',
    'image' : '2.png',
    'link' : 'www.google.com',
    'descr': 'The Great Barrier Reef is an irreplaceable ecosystem - home to thousands of species of marine life, including fish, dolphins... '

},
{
    'id' : '3',
    'charity' : 'Rainforest Foundation Fund',
    'image' : '3.png',
    'link' : 'www.google.com',
    'descr': 'The mission of the Rainforest Foundation is to support indigenous and traditional peoples of the world’s rainforests in their efforts to...'
},
{
    'id' : '4',
    'charity' : 'Earthjustice',
    'image' : '4.png',
    'link' : 'www.google.com',
    'descr': 'Our mission is to wield the power of law and the strength of partnership to protect people\'s health, to preserve magnificent places and wildlife...'
},
{
    'id' : '5',
    'charity' : 'Surfrider Foundation',
    'image' : '5.png',
    'link' : 'www.google.com',
    'descr': 'The Surfrider Foundation is dedicated to the protection and enjoyment of the world\'s ocean, waves and beaches, for all people, through a powerful...'
},
{
    'id' : '6',
    'charity' : 'Clean Air Foundation',
    'image' : '6.png',
    'link' : 'www.google.com',
    'descr': 'The Clean Air Foundation makes the air clean'
},
{
    'id' : '7',
    'charity' : 'Turtles',
    'image' : '7.png',
    'link' : 'www.google.com'

},
{
    'id' : '8',
    'charity' : 'Bears',
    'image' : '8.png',
    'link' : 'www.google.com'
},
{
    'id' : '9',
    'charity' : 'No Wildfires',
    'image' : '9.png',
    'link' : 'www.google.com'
},
{
    'id' : '10',
    'charity' : 'Reforest',
    'image' : '10.png',
    'link' : 'www.google.com'
}
]

export default function MyCharity({ navigation }) {
    
    return (
        <SafeAreaView style = {styles.container}>
        <Image
            source = {require('../Images/tree.jpeg')}
            style={styles.image}
        />
        <View style={styles.oval}>
            <Text style={styles.bigtext}>Big Tree Foundation</Text>
        </View>
        </SafeAreaView>     
    )
}

const styles = StyleSheet.create({
    container: {
      marginTop: StatusBar.currentHeight || 0,
      justifyContent: "center",
      alignItems: 'center',
    },
    image: {
        resizeMode:"cover",
        height: 300,
        width: 300,
        borderWidth: 2
      },
    oval: {
        marginVertical: 10,
        padding: 20,
        borderWidth: 2,
        borderRadius: 25,
        backgroundColor: '#56CCF2',
        alignItems: "center",
    },
    bigtext : {
        fontSize: 30,
    }
  });
