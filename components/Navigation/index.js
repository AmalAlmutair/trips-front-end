import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../Home";
import Signup from "../authentication/Signup";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Signin"
        component={Signin}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
