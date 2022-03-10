import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Home from "../Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Signin from "../authentication/Signin";
import Signup from "../authentication/Signup";
import ForgetPassword from "../ForgetPassword";
import Profile from "../Profile";
import TripsList from "../Trips/TripsList";
import TripCreate from "../Trips/TripCreate";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen
        name="CreateTrip"
        component={TripCreate}
        options={{ headerShown: false }}
      /> */}

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
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeTrips"
        component={TripsList}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Profile"
        component={Profile}
        //options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
