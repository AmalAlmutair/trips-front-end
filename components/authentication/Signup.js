import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import authStore from "../../stores/authStore";

const Signup = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handelCange = (type, e) => {
    setUser({ ...user, [type]: e });
  };

  return <View></View>;
};

export default Signup;

const styles = StyleSheet.create({});
