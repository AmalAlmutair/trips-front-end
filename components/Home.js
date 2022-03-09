import { HStack } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Home = () => {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <Text>HI</Text>
      </View>
      <View style={styles.view3}>
        <HStack style={styles.view3}>
          <AntDesign name="home" size={30} style={styles.icon} color="black" />
          <AntDesign
            name="search1"
            size={30}
            style={styles.icon}
            color="black"
          />
          <AntDesign
            name="pluscircleo"
            size={30}
            style={styles.icon}
            color="black"
          />
          <AntDesign name="user" size={30} style={styles.icon} color="black" />
          <MaterialCommunityIcons
            name="google-maps"
            size={30}
            style={styles.icon}
            color="black"
          />
        </HStack>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
  view2: {
    flex: 9,
    backgroundColor: "white",
  },
  view3: {
    flex: 1,
  },
  icon: {
    flex: 1,
    paddingLeft: 15,
    marginTop: "2%",
    marginLeft: "2%",
  },
});
