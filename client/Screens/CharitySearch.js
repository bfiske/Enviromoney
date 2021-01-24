import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, ScrollView, FlatList, StatusBar, Image, TouchableOpacity, SafeAreaView, ImageStore} from "react-native";
import { SearchBar, Card } from "react-native-elements"

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

export default function Charities({ navigation }) {
    const [search, setSearch] = useState('')

    updateSearch = (search) => {
        setSearch({ search });
        updateData(search)
    };

    const [selectedId, setSelectedId] = useState(null);
    const [input, setInput] = useState(null)
    const [data, setData] = useState(dummyData)


    const updateData = (input) => {
        const newData = dummyData.filter(charity => {
            return charity.charity.toLowerCase().includes(input.toLowerCase())
        })
        setData(newData)
    }

    const Item = ({ item, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.charity}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "white" : "#56ccf2";
        return (
<<<<<<< Updated upstream
        <Item
            item={item}
            onPress={() => navigation.navigate("IndividualCharity", {charity : item})}
            style={{ backgroundColor }}
        />
=======
        <TouchableOpacity
            onPress = {() => navigation.navigate("IndividualCharity", {charity : item})}
            >
            <Card>
                <View style = {{flexDirection: 'row', flex : 1}}>
                <View style = {{flex : 33}}>
                    <Image 
                    source = {require('../Images/tree.jpeg')}
                    style = {styles.image}
                    />
                </View>
                <View style = {{flex : 66}}> 
                    <Text style = {styles.title}>{item.charity}</Text>
                    <Text>{item.descr}</Text>
                </View>
                </View>
            </Card>
        </TouchableOpacity>
>>>>>>> Stashed changes
        );
    };

    return (
        <SafeAreaView style = {styles.view1}>
        <SearchBar  
            placeholder = "What new organization would you like to donate to?"
            onChangeText={updateSearch}
            value={search}
            containerStyle = {{backgroundColor : "#56CCF2"}}
            
        />
        <ScrollView>
            <FlatList
                data={data}
                renderItem = {renderItem}
                keyExtractor={(item) => item.id}
            />
        </ScrollView>
        </SafeAreaView>
        
    )
}

const styles = StyleSheet.create({
    view1: {
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
        alignItems: 'center',
        justifyContent: 'center',
      },
  });