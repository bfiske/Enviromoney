import React from "react";
import { Dimensions, StyleSheet, Button, Linking, ScrollView, Text, View, SafeAreaView, Image, TouchableOpacity} from "react-native";
import NavBar from "../Components/NavBar";
import NewImage from "../Components/NewImage";

const screen = Dimensions.get("screen");

export default function IndividualCharity( props ) {
    const image = props.route.params.charity.image
    const char = props.route.params.charity.charity
    const link = props.route.params.charity.link
    const descr = props.route.params.charity.descr
    return (
      <View style={styles.container}>
          <Image source={image} style={styles.image} />
          <Text style={styles.bigText}>{char}</Text> 
          <Text style={styles.littleText}>{descr}</Text>
          <TouchableOpacity
            style={styles.nextBtn}
            //onPress={() => handleSubmit()}
          >
          <Text style={styles.nextText}>Learn More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.nextBtn}
            //onPress={() => handleSubmit()}
          >
            <Text style={styles.nextText}>Support this organization!</Text>
          </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: screen.width,
  },
  image : {
    height: 100,
    width : 100,
    marginRight: 20,
    resizeMode:"cover",
  },
  nextBtn: {
    backgroundColor: "#56CCF2",
    alignItems: "center",
    paddingHorizontal: 150,
    paddingVertical: 20,
    borderRadius: 50,
    marginTop: 50,
  },
  nextText: {
    color: "white",
    fontSize: 20,
  },
  bigText: {
    fontSize: 25,
    padding: 20
  },
  littleText: {
    marginRight: 20,
    marginLeft: 20
  }
})
