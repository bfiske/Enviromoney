import React from "react";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { LineChart } from "react-native-chart-kit";
import { Card } from "react-native-elements";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import NavBar from "../Components/NavBar";

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 1,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 1,
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 1, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const screenWidth = Dimensions.get("window").width;
const data = {
  labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thurs"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(86, 204, 242, ${opacity})`, // optional
      strokeWidth: 2, // optional
    },
  ],
  legend: ["Daily"], // optional
};

const dummyData = [
  { day: "Saturday 1/31/2019", amount: "0.5" },
  { day: "Saturday 1/31/2019", amount: "0.5" },
  { day: "Saturday 1/31/2019", amount: "0.5" },
  { day: "Saturday 1/31/2019", amount: "0.5" },
  { day: "Saturday 1/31/2019", amount: "0.5" },
  { day: "Saturday 1/31/2019", amount: "0.5" },
];

export default function GraphStats({ navigation }) {
  const renderItem = ({ item }) => (
    <Card>
      <Text>
        {item.day} ${item.amount}
      </Text>
    </Card>
  );
  return (
    <>
      <ScrollView style={{ backgroundColor: "white" }}>
        <View style={styles.headerBtns}>
          <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>Daily</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerBtn}>
            <Text style={styles.headerBtnText}>Weekly</Text>
          </TouchableOpacity>
        </View>
        <LineChart
          style={{
            margin: 20,
            borderRadius: 10,
          }}
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
        />
        <Text>Total Collected</Text>
        <FlatList data={dummyData} renderItem={renderItem} />
      </ScrollView>
      <NavBar navigation={navigation} />
    </>
  );
}

const styles = StyleSheet.create({
  headerBtns: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  headerBtn: {
    backgroundColor: "#56CCF2",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    marginTop: 2,
    marginHorizontal: 10,
  },
  headerBtnText: {
    color: "white",
  },
});
