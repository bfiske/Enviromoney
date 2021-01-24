import React, { useState } from "react";
import { Text, StyleSheet, View, TextInput, Button, ScrollView, FlatList, StatusBar, Image, TouchableOpacity, SafeAreaView, ImageStore} from "react-native";
import { SearchBar, Card, ListItem, Icon } from "react-native-elements"
import NewImage from '../Components/NewImage'

const dummyData = [{
    'id' : '1',
    'charity' : 'World Wildlife Fund',
    'image' : '../Images/wwf.jpeg',
    'link' : 'www.google.com',
    'descr': 'The mission of World Wildlife Fund is to conserve nature and reduce the most pressing threats to the diversity of life on Earth.'
},
{
    'id' : '2',
    'charity' : 'The Great Barrier Reef Foundation',
    'image' : '../Images/gbrf.jpeg',
    'link' : 'www.google.com',
    'descr': 'The Great Barrier Reef is an irreplaceable ecosystem - home to thousands of species of marine life, including fish, dolphins... '

},
{
    'id' : '3',
    'charity' : 'Rainforest Foundation Fund',
    'image' : '../Images/rff.jpeg',
    'link' : 'www.google.com',
    'descr': 'The mission of the Rainforest Foundation is to support indigenous and traditional peoples of the world’s rainforests in their efforts to...'
},
{
    'id' : '4',
    'charity' : 'Earthjustice',
    'image' : '../Images/ej.jpeg',
    'link' : 'www.google.com',
    'descr': 'Our mission is to wield the power of law and the strength of partnership to protect people\'s health, to preserve magnificent places and wildlife...'
},
{
    'id' : '5',
    'charity' : 'Surfrider Foundation',
    'image' : '../Images/sr.jpeg',
    'link' : 'www.google.com',
    'descr': 'The Surfrider Foundation is dedicated to the protection and enjoyment of the world\'s ocean, waves and beaches, for all people, through a powerful...'
},
{
    'id' : '6',
    'charity' : 'Clean Air Foundation',
    'image' : '../Images/caf.jpeg',
    'link' : 'www.google.com',
    'descr': 'The Clean Air Foundation makes the air clean'
},
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
        <TouchableOpacity
            onPress = {() => navigation.navigate("IndividualCharity", {charity : item})}
            >
            <Card>
                <View style = {{flexDirection: 'row', flex : 1}}>
                <View style = {{flex : 33}}>
                    {/* <Image 
                    source = {require(`${item.image}`)}
                    style = {styles.image}
                    /> */}
                    <NewImage source={item.image} key={item.image} style={styles.image}/>
                </View>
                <View style = {{flex : 66}}> 
                    <Text style = {styles.title}>{item.charity}</Text>
                    <Text>{item.descr}</Text>
                </View>
                </View>
            </Card>
        </TouchableOpacity>
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
        );
    };

    return (
        <SafeAreaView style = {styles.view1}>
        <SearchBar  
            placeholder = "Search for an organization"
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
      fontSize: 20,
    },
    image: {
        height: 100,
        width : 100,
        marginRight: 20,
        resizeMode:"cover",
    }
  });