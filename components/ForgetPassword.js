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
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
        >
          Welcome
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID or Username</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Last Entered Password</FormControl.Label>
            <Input type="password" />
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
