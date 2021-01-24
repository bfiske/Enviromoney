import React from "react";
import { View, Text, Button } from "react-native";
import { View, Text } from "react-native";

export default function Home(props) {
  return (
<<<<<<< Updated upstream
    <View>
      <Text>Welcome, {props.route.params.username}</Text>
      <Button
        onPress = {() => props.navigation.navigate("Charities")}
        title = "Go to Charities"
      />
    </View>
=======
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.body}>
        <View style={styles.container}>
          <Text style={styles.welcome}>Welcome, {route.params.username}</Text>
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
          <Card.Divider />
          <TouchableOpacity
            style={styles.changeBtn}
            onPress={() => navigation.navigate("Organization Search")}
          >
            <Text style={styles.changeBtnText}>Change Organization</Text>
          </TouchableOpacity>
        </Card>
        <Card>
          <Card.Title>World Wide Fund</Card.Title>
          <Card.Divider />

          <Text style={styles.text}>
            World Wide Fund used your $10 donation to rescue California Condors
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
>>>>>>> Stashed changes
  );
}
