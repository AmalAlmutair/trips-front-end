import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { Button, HStack } from "native-base";

const Profile = () => {
  const [image, setImage] = useState(
    "https://www.tenforums.com/geek/gars/images/2/types/thumb_15951118880user.png"
  );

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [trips, setTrips] = useState([]);

  const handleChange = () => {
    setImage();
  };

  return (
    <View style={styles.view1}>
      <View style={styles.dead}></View>
      <View style={styles.view2}>
        <View style={styles.username}>
          <Text
            style={[styles.text, { flex: 1, marginTop: 15, marginLeft: 5 }]}
          >
            @username:
          </Text>
        </View>
        <HStack style={styles.hstack}>
          <View style={styles.pic}>
            <Image
              source={{
                uri: image,
              }}
              style={styles.image}
            ></Image>
          </View>
          <View style={styles.bio}>
            <Text style={styles.text}>Name:</Text>
            <Text style={styles.text}>Bio:</Text>
            <Text style={[styles.text, { marginTop: 70 }]}>Total Trips:</Text>
          </View>
        </HStack>
      </View>
      <View style={styles.edit}>
        <Button style={styles.button}>Edit Profile</Button>
      </View>
      <View style={styles.trips}>
        <Text style={styles.details}>My Trips</Text>
        <ScrollView style={{ flex: 1 }}>
          <tripItem />
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
  },
  dead: {
    flex: 1,
    backgroundColor: "green",
  },
  view2: {
    flex: 5,
    backgroundColor: "black",
  },
  image: {
    height: 140,
    width: 140,
    borderRadius: 70,
    alignSelf: "flex-start",
    marginBottom: "5%",
    marginTop: "25%",
    marginLeft: "4%",
  },
  edit: {
    flex: 1,
    backgroundColor: "blue",
  },

  trips: {
    flex: 7,
    backgroundColor: "pink",
  },
  username: {
    flex: 1,
    backgroundColor: "purple",
  },
  info: {
    flex: 4,
    backgroundColor: "brown",
  },
  hstack: {
    flex: 4,
  },
  pic: {
    flex: 2,
    backgroundColor: "red",
  },
  bio: {
    flex: 3,
    backgroundColor: "white",
  },
  text: {
    flex: 1,
    marginTop: 20,
    marginLeft: 5,
    fontWeight: "500",
    fontSize: 20,
  },
  button: {
    width: 300,
    alignSelf: "center",
    marginTop: 7,
  },
  details: {
    marginTop: 2,
    alignSelf: "center",
    fontWeight: "500",
    fontSize: 20,
    textDecorationLine: "underline",
  },
});
