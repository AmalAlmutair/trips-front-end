import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
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

const handleSubmit = () => {
  alert("A new password has been into your email");
};

const ForgetPassword = ({ navigation }) => {
  return (
    <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Heading
          size="lg"
          marginTop="150"
          fontWeight="600"
          padding="1"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Forgot Your Password ?
        </Heading>

        <Heading
          mt="1"
          marginRight="1"
          alignSelf="center"
          _dark={{
            color: "warmGray.200",
          }}
          color="coolGray.600"
          fontWeight="medium"
          size="xs"
        >
          Enter your email or username and we'll send a link to reset your
          password{" "}
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email Address or Username</FormControl.Label>
            <Input />
          </FormControl>

          <Button onPress={handleSubmit} mt="2" colorScheme="indigo">
            Submit
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default ForgetPassword;

const styles = StyleSheet.create({});
