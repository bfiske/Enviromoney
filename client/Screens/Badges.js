import React from "react";
import { Text, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Card } from "react-native-elements";
import NavBar from "../Components/NavBar";
import { StyleSheet } from "react-native";

const badges = [
  {
    name: "Tree Hugger",
    description: "donated $20 to foundations that prevent deforestation",
    isEarned: true,
  },
  {
    name: "Pet-friendly",
    description:
      "donated $20 to organizations focused on improving animal conditions",
    isEarned: true,
  },
  {
    name: "Plastic Pulverizer",
    description:
      "donated $20 to organizations focused on improving wildlife condition",
    isEarned: false,
  },
  {
    name: "Ocean Avenger",
    description: "donated $20 to help clear ocean waters of human pollution",
    isEarned: false,
  },
  {
    name: "Whirlwind",
    description: "donated $20 to causes looking to advance sustainable energy",
    isEarned: false,
  },
];

export default function Badges({ navigation }) {
  const earnedBages = badges.filter((b) => b.isEarned);
  const notEarned = badges.filter((b) => !b.isEarned);

  const renderItem = ({ item }) => {
    return (
      <Card>
        <Card.Title>{item.name}</Card.Title>
        <Text>{item.description}</Text>
      </Card>
    );
  };

  return (
    <>
      <ScrollView style={styles.main}>
        <View style={styles.mainView}>
          <Text style={styles.mainTxt}>Badges</Text>
        </View>
        <View>
          <View style={styles.header}>
            <Text style={styles.headerTxt}>Badges Earned</Text>
          </View>
          <FlatList data={earnedBages} renderItem={renderItem} />
          <View style={styles.header}>
            <Text style={styles.headerTxt}>Badges In Progress</Text>
          </View>

          <FlatList data={notEarned} renderItem={renderItem} />
        </View>
      </ScrollView>
      <NavBar navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  headerTxt: {
    fontSize: 20,
    padding: 10,
    color: "white",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "#56CCF2",
    borderRadius: 30,
    flexDirection: "row",
    marginHorizontal: 40,
  },
  main: {
    backgroundColor: "white",
  },
  mainTxt: {
    fontSize: 20,
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
});
