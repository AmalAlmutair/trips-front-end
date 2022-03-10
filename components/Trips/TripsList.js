import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tripStore from "../../stores/tripStore";
import TripItem from "./TripItems";

import { observer } from "mobx-react";
import { Button, ScrollView, VStack } from "native-base";

const TripList = () => {
  const tripList = tripStore.items.map((item) => {
    console.log(item);
    return <TripItem trip={item} key={item._id} />;
  });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>{tripList}</ScrollView>
    </View>
  );
};

export default observer(TripList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
