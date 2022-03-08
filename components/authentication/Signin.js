import React, { useState } from "react";
import authStore from "../../stores/authStore";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import {
  Button,
  Box,
  VStack,
  HStack,
  Heading,
  FormControl,
  Center,
  Input,
  Link,
} from "native-base";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleSubmit = () => {
    authStore.signin(user);
  };

  console.log(user);
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          fontWeight="600"
          alignSelf="center"
          marginTop="150"
          padding="1"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome To Nomadic
        </Heading>
        <Heading
          mt="1"
          alignSelf="center"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Input
              onChangeText={(username) => setUser({ ...user, username })}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              onChangeText={(password) => setUser({ ...user, password })}
            />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "indigo.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              onPress={() => navigation.navigate("Signup")}
              _text={{
                color: "indigo.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default Signin;

const styles = StyleSheet.create({});
