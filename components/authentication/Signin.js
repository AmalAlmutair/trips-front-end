import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import authStore from "../../stores/authStore";
import { useNavigation } from "@react-navigation/native";

const Signin = () => {
  const navigation = useNavigation();

  const [user, setUser] = useState({ username: "", password: "" });

  const handelCange = (type, e) => {
    setUser({ ...user, [type]: e });
  };

  console.log(user);
  return <View></View>;
};

export default Signin;

const styles = StyleSheet.create({});
