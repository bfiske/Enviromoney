import React, { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Card } from "react-native-elements";
import NavBar from "../Components/NavBar";
import { UserContext } from "../Contexts/UserContext";

export default function Home({ navigation, route }) {
  const progress = (amt) => {
    if (amt < 5) {
      return (amt / 5) * 100;
    }
  };

  const userCtx = useContext(UserContext);

  return (
    <>
      <ScrollView
        style={{ backgroundColor: "white", flex: 1 }}
        scrollToOverflowEnabled={true}
      >
        <View style={styles.body}>
          <View style={styles.container}>
            <Text style={styles.welcome}>Welcome, {userCtx.user}</Text>
          </View>
          <View style={styles.container}>
            <AnimatedCircularProgress
              size={200}
              width={15}
              fill={progress(3)}
              tintColor="#00e0ff"
              backgroundColor="#E8E8E8"
            >
              {(fill) => (
                <View style={styles.circleView}>
                  <Text style={styles.text}>Today (0)</Text>

                  <Text style={styles.userProgress}>$3</Text>
                  <Text style={styles.total}>out of $5</Text>
                </View>
              )}
            </AnimatedCircularProgress>
          </View>
          <Card>
            <Card.Title>Plant for the Earth</Card.Title>
            <Text style={styles.text}>Weekly Donations: $15</Text>
            <Text style={styles.text}>Monthly Donations: $55</Text>
            <TouchableOpacity
              style={styles.changeBtn}
              onPress={() => navigation.navigate("Organizations", {changemode : true})}
            >
              <Text style={styles.changeBtnText}>Change Organization</Text>
            </TouchableOpacity>
          </Card>
          <Card>
            <Card.Title>World Wide Fund</Card.Title>
            <Card.Divider />

            <Text style={styles.text}>
              World Wide Fund used your $10 donation to rescue California
              Condors
            </Text>
          </Card>
          <Card>
            <Card.Title>Plant for the Earth</Card.Title>
            <Card.Divider />
            <Text style={styles.text}>
              Plant for the Earth planted 3 trees using your $5 donation
            </Text>
          </Card>
        </View>
      </ScrollView>
      <NavBar navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  circleView: {
    alignItems: "center",
    justifyContent: "center",
  },
  userProgress: {
    fontSize: 20,
    color: "#56CCF2",
  },
  total: {
    color: "#BDBDBD",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  welcome: {
    fontSize: 40,
    marginVertical: 40,
  },
  text: {
    marginVertical: 10,
  },
  changeBtn: {
    backgroundColor: "#56CCF2",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 2,
  },
  changeBtnText: {
    color: "white",
    fontSize: 20,
  },
  body: {
    backgroundColor: "white",
  },
});
