import React, { useContext } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
} from "react-native";
import { UserContext } from "../Contexts/UserContext";
import NavBar from "../Components/NavBar";
import { Avatar, Card } from "react-native-elements";

const treeImg = require("../Images/tree.jpeg");

const userDummyData = {
  totalDonation: 65,
  achievements: ["Planted 9 trees", "Picked up 12 pounds of ocean plastic"],
};

const screenWidth = Dimensions.get("window").width;
export default function Profile({ navigation }) {
  const userCtx = useContext(UserContext);

  const renderItem = ({ item }) => {
    return (
      <Card>
        <Text>{item}</Text>
      </Card>
    );
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.blueBg}>
          <Text style={styles.profileTxt}>Your Profile</Text>
          <View style={styles.profilePic}>
            <Avatar
              rounded
              size="xlarge"
              source={{ uri: treeImg.toString() }}
              activeOpacity={0.7}
            />
          </View>
        </View>
        <View style={styles.userHeader}>
          <Text style={styles.username}>{userCtx.user}</Text>
          <Text style={{ fontSize: 20, marginTop: 20, marginBottom: 10 }}>
            Total Donations: {userDummyData.totalDonation}
          </Text>
          <Text style={{ fontSize: 20 }}>Achievements</Text>
        </View>
        <View style={styles.achievementsList}>
          <FlatList data={userDummyData.achievements} renderItem={renderItem} />
        </View>

        <NavBar navigation={navigation} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  blueBg: {
    backgroundColor: "#56CCF2",
    alignItems: "center",
  },
  username: { fontSize: 40 },
  userHeader: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
  profileTxt: { fontSize: 30, color: "white", marginVertical: 20 },
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "white",
  },
  profilePic: {
    marginBottom: -60,
  },
  achievementsList: {
    flex: 1,
    marginTop: -350,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
});
