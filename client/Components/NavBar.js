import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Charities from "../Screens/CharitySearch";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from "react-native-svg";

const Tab = createBottomTabNavigator();

export default function NavBar({ navigation }) {
  return (
    <View style={styles.navBar}>
      <View>
        <TouchableOpacity>
          <Svg
            width={33}
            height={33}
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M31.625 4.125h-5.958V1.547C25.667.69 25.054 0 24.292 0H8.708c-.762 0-1.375.69-1.375 1.547v2.578H1.375C.613 4.125 0 4.815 0 5.672v3.61c0 2.3 1.29 4.666 3.546 6.49a12.571 12.571 0 006.302 2.687c1.8 3.358 3.902 4.744 3.902 4.744v4.64H11c-2.022 0-3.667 1.335-3.667 3.61v.774c0 .425.31.773.688.773h16.958c.378 0 .688-.348.688-.773v-.774c0-2.275-1.645-3.61-3.667-3.61h-2.75v-4.64s2.103-1.386 3.902-4.744a12.528 12.528 0 006.302-2.687C31.705 13.948 33 11.582 33 9.282v-3.61c0-.857-.613-1.547-1.375-1.547zM5.689 12.427c-1.398-1.135-2.022-2.398-2.022-3.146V8.25h3.678c.057 2.101.332 3.944.733 5.556a8.908 8.908 0 01-2.389-1.38zM29.333 9.28c0 1.038-1.014 2.327-2.022 3.146a8.94 8.94 0 01-2.395 1.379c.401-1.611.676-3.455.733-5.556h3.684v1.031z"
              fill="#fff"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Organizations")}>
          <Svg
            width={28}
            height={33}
            viewBox="0 0 28 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M27.585 24.395l-5.825-5.833h2.233c.658 0 1.239-.322 1.516-.841.277-.519.186-1.113-.24-1.55l-5.697-5.858h2.107c.664 0 1.262-.345 1.521-.878.257-.524.136-1.133-.31-1.552L14.85.312c-.44-.416-1.26-.416-1.7 0L5.108 7.883c-.444.419-.565 1.028-.309 1.552.26.533.858.878 1.522.878h2.107L2.73 16.172c-.424.437-.515 1.03-.239 1.55.277.518.858.84 1.516.84H6.24L.415 24.394c-.438.438-.537 1.038-.26 1.564.273.519.875.854 1.532.854h9.98v1.576l-2.21 3.12C9.07 32.192 9.635 33 10.502 33H17.5c.867 0 1.431-.807 1.043-1.493l-2.209-3.12v-1.575h9.98c.657 0 1.259-.335 1.532-.854.277-.526.178-1.126-.26-1.563z"
              fill="#fff"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Svg
            width={37}
            height={33}
            viewBox="0 0 37 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M18.01 8.561L6.166 19.748V31.82c0 .313.108.613.301.834a.966.966 0 00.727.345l7.198-.021a.967.967 0 00.723-.348c.192-.22.3-.52.3-.831v-7.05c0-.314.107-.613.3-.834a.966.966 0 01.727-.346h4.11c.273 0 .535.125.727.346.193.22.301.52.301.833v7.046c0 .155.026.308.078.452.051.143.127.274.222.384.096.11.21.197.334.256.125.06.259.09.394.09l7.195.023a.966.966 0 00.727-.345c.193-.221.3-.521.3-.834V19.74L18.993 8.56a.723.723 0 00-.491-.199.723.723 0 00-.492.2zm18.705 7.603l-5.37-5.076V.884a.954.954 0 00-.225-.625.724.724 0 00-.545-.259h-3.597c-.204 0-.4.093-.545.259a.954.954 0 00-.226.625v5.35L20.457.806C19.905.286 19.212 0 18.497 0c-.714 0-1.407.285-1.958.806L.279 16.164a.872.872 0 00-.19.268.983.983 0 00-.055.674.93.93 0 00.143.303l1.638 2.284c.064.09.143.164.233.219a.676.676 0 00.588.065.745.745 0 00.265-.164L18.009 5.541a.723.723 0 01.492-.2c.179 0 .352.071.491.2l15.11 14.272c.077.074.167.13.264.164a.677.677 0 00.588-.064.803.803 0 00.233-.218l1.638-2.283a.933.933 0 00.142-.305 1.005 1.005 0 00-.06-.676.867.867 0 00-.191-.267z"
              fill="#fff"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Analytics")}>
          <Svg
            width={34}
            height={33}
            viewBox="0 0 34 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M22.1 22h2.55c.425 0 .85-.55.85-1.1V9.35c0-.55-.425-1.1-.85-1.1H22.1c-.425 0-.85.55-.85 1.1V20.9c0 .55.425 1.1.85 1.1zm6.375 0h2.55c.425 0 .85-.55.85-1.1V1.1c0-.55-.425-1.1-.85-1.1h-2.55c-.425 0-.85.55-.85 1.1v19.8c0 .55.425 1.1.85 1.1zM9.35 22h2.55c.425 0 .85-.55.85-1.1v-6.05c0-.55-.425-1.1-.85-1.1H9.35c-.425 0-.85.55-.85 1.1v6.05c0 .55.425 1.1.85 1.1zm6.375 0h2.55c.425 0 .85-.55.85-1.1V3.85c0-.55-.425-1.1-.85-1.1h-2.55c-.425 0-.85.55-.85 1.1V20.9c0 .55.425 1.1.85 1.1zm17.212 5.5H4.25V1.375C4.25.615 3.775 0 3.187 0H1.063C.475 0 0 .615 0 1.375V30.25C0 31.768.952 33 2.125 33h30.813c.587 0 1.062-.615 1.062-1.375v-2.75c0-.76-.475-1.375-1.063-1.375z"
              fill="#fff"
            />
          </Svg>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Svg
            width={30}
            height={33}
            viewBox="0 0 30 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M15 18.563c4.658 0 8.438-4.158 8.438-9.282S19.657 0 15 0c-4.658 0-8.438 4.157-8.438 9.281 0 5.124 3.78 9.281 8.438 9.281zm7.5 2.062h-3.229A9.44 9.44 0 0115 21.656a9.458 9.458 0 01-4.271-1.031H7.5c-4.143 0-7.5 3.693-7.5 8.25v1.031C0 31.614 1.26 33 2.813 33h24.375C28.74 33 30 31.614 30 29.906v-1.031c0-4.557-3.357-8.25-7.5-8.25z"
              fill="#fff"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    backgroundColor: "#56CCF2",
    paddingBottom: 30,
    position: "absolute",
    bottom: 0,
    left: 0,
    paddingTop: 20,
    right: 0,
  },
  navItem: {
    borderColor: "black",
    borderWidth: 1,
    width: 20,
    height: 60,
  },
});
