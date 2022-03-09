import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {
  Button,
  Box,
  VStack,
  Heading,
  FormControl,
  Center,
  Input,
} from "native-base";
import authStore from "../../stores/authStore";
import { values } from "mobx";

const Signup = ({ navigation }) => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const handlePasword = (cPassword) => {
    if (user.password === cPassword) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }
  };

  const handleChange = () => {
    if (isPasswordMatch === true) {
      authStore.signup(user, navigation);
    } else {
      Alert.alert("Password doen't match");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Center w="100%">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading
            size="lg"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            fontWeight="semibold"
          >
            Welcome
          </Heading>
          <Heading
            mt="1"
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontWeight="medium"
            size="xs"
          >
            Sign up to continue!
          </Heading>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input
                onChangeText={(value) => {
                  setUser({ ...user, username: value });
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input
                type="password"
                onChangeText={(value) => {
                  setUser({ ...user, password: value });
                }}
              />
            </FormControl>
            <FormControl>
              <FormControl.Label>Confirm Password</FormControl.Label>
              <Input
                isInvalid={!isPasswordMatch}
                type="password"
                style={styles.red}
                onChangeText={(cPassword) => {
                  handlePasword(cPassword);
                }}
              />
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={handleChange}>
              Sign up
            </Button>
          </VStack>
        </Box>
      </Center>
    </TouchableWithoutFeedback>
  );
};

export default Signup;

const styles = StyleSheet.create({});
