import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import { baseUrl } from "../../stores/instance";
import { Ionicons } from "@expo/vector-icons";

import TripStore from "../../stores/tripStore";
import { FontAwesome5 } from "@expo/vector-icons";
import { observer } from "mobx-react";

const TripItem = ({ trip }) => {
  //   const [editMode, setEditMode] = useState(false);

  //   const handleEdit = () => {
  //     TripStore.editTrip(trip);
  //     setEditMode(false);
  //   };

  //   const handleDelete = () => {
  //     console.log();
  //     TripStore.removeItemFromTrip(trip);
  //   };

  return (
    <HStack style={styles.items}>
      <HStack style={styles.container}>
        {/* <HStack>
          <Image source={{ uri: baseUrl + trip.image }} style={styles.img} />
          <VStack>
            <Text style={styles.title}>{trip.title}</Text>
          </VStack>
          <VStack>
            <Text style={styles.title}>{trip.creater}</Text>
          </VStack>
        </HStack> */}
        <Image source={{ uri: baseUrl + trip.image }} style={styles.img} />
        <VStack style={styles.container}>
          <Text style={styles.title}>{trip.title}</Text>
          <Text style={styles.title}>{trip.creater}</Text>
        </VStack>
      </HStack>
    </HStack>
  );
};

export default observer(TripItem);

const styles = StyleSheet.create({
  items: {
    // flex: 1,
    height: 150,
    width: "100%",
    backgroundColor: "#d3d3d3",
    marginTop: 10,
  },
  container: {
    flex: 1,
    // width: "100%",
    // justifyContent: "space-between",
    // alignItems: "center",
    // backgroundColor: "green",
    // borderBottomWidth: 1,
    // borderBottomColor: "#ddd",
  },
  info: {
    alignItems: "center",
    flex: 5,
    padding: 10,
  },
  img: {
    // flex: 1,
    width: 150,
    height: 150,
    marginRight: 5,
    borderRadius: 10,
  },
  title: {
    flex: 1,
    // color: "Grey",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10,
    textAlign: "center",
  },
});
