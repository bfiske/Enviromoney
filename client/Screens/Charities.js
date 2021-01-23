import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, ScrollView, FlatList, StatusBar, Image, TouchableOpacity, SafeAreaView, ImageStore} from "react-native";

export default function Charities() {
    const [selectedId, setSelectedId] = useState(null);
    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.charity}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "white" : "green";
        return (
        <Item
            item={item}
            onPress={() => setSelectedId(item.id)}
            style={{ backgroundColor }}
        />
        );
    };

    return (
        <SafeAreaView style = {styles.view}>
        <Image
            source = {require('../Images/tree.jpeg')}
            style={styles.stretch, styles.container}
        />
        <Text>Current Charity: One Big Tree</Text>
        <Text>Other Charities:</Text>
        <ScrollView>
            <FlatList
                data={dummyData}
                renderItem = {renderItem}
                keyExtractor={(item) => item.id}
            />
        </ScrollView>
        </SafeAreaView>
    )
}

const dummyData = [{
    'id' : '1',
    'charity' : 'Tree Place',
    'image' : './images/tree.jpeg',
    'link' : 'www.google.com'
},
{
    'id' : '2',
    'charity' : 'Water Place',
    'image' : '2.png',
    'link' : 'www.google.com'

},
{
    'id' : '3',
    'charity' : 'Mountain Place',
    'image' : '3.png',
    'link' : 'www.google.com'
},
{
    'id' : '4',
    'charity' : 'Save the Plants',
    'image' : '4.png',
    'link' : 'www.google.com'
},
{
    'id' : '5',
    'charity' : 'Recycle',
    'image' : '5.png',
    'link' : 'www.google.com'
},
{
    'id' : '6',
    'charity' : 'No Litter',
    'image' : '6.png',
    'link' : 'www.google.com'
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
const styles = StyleSheet.create({
    view: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      justifyContent: "center",
      alignItems: 'center',
    },
    item: {
      backgroundColor: 'white',
      padding: 10,
      marginVertical: 2,
      marginHorizontal: 5,
    },
    title: {
      fontSize: 15,
    },
    image: {
        flex: 1,
        width: null,
        height: null,
        alignItems: 'center',
        justifyContent: 'center'
      },
  });